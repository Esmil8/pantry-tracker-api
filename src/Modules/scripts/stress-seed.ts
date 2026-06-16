import { faker } from '@faker-js/faker';
import { prisma } from "../../Shared/Prisma";

async function runStressSeed() {
    console.log("🧹 Limpiando base de datos completa para el laboratorio...");
    // Limpieza total en orden de dependencias (de hijos a padres)
    await prisma.pantryItem.deleteMany({});
    await prisma.pantry.deleteMany({});
    await prisma.product.deleteMany({});
    await prisma.category.deleteMany({});
    await prisma.unit.deleteMany({});

    // ─── 1. CATEGORÍAS ────────────────────────────────────────────────────────
    console.log("📂 Generando 20 categorías ficticias...");
    const categoryNames = new Set<string>();
    while (categoryNames.size < 20) {
        categoryNames.add(faker.commerce.department());
    }

    await prisma.category.createMany({
        data: [...categoryNames].map((name) => ({
            Name: name,
            Description: faker.lorem.sentence(),
        })),
    });

    const existingCategories = await prisma.category.findMany({ select: { Id: true } });
    console.log(`   ✅ ${existingCategories.length} categorías creadas.`);

    // ─── 2. UNIDADES ──────────────────────────────────────────────────────────
    console.log("📏 Generando 10 unidades ficticias...");
    const units = [
        { Name: "Kilogramo",    Abbreviation: "kg"  },
        { Name: "Gramo",        Abbreviation: "g"   },
        { Name: "Libra",        Abbreviation: "lb"  },
        { Name: "Onza",         Abbreviation: "oz"  },
        { Name: "Litro",        Abbreviation: "l"   },
        { Name: "Mililitro",    Abbreviation: "ml"  },
        { Name: "Unidad",       Abbreviation: "un"  },
        { Name: "Paquete",      Abbreviation: "pkg" },
        { Name: "Caja",         Abbreviation: "box" },
        { Name: "Lata",         Abbreviation: "can" },
    ];

    await prisma.unit.createMany({ data: units });

    const existingUnits = await prisma.unit.findMany({ select: { Id: true } });
    console.log(`   ✅ ${existingUnits.length} unidades creadas.`);

    // ─── 3. PRODUCTOS ─────────────────────────────────────────────────────────
    console.log("🛒 Generando 5,000 productos ficticios...");
    const productsToInsert: any[] = [];

    for (let i = 0; i < 5000; i++) {
        const randomCategory = existingCategories[Math.floor(Math.random() * existingCategories.length)];
        const randomUnit     = existingUnits[Math.floor(Math.random() * existingUnits.length)];

        productsToInsert.push({
            Name:        faker.commerce.productName(),
            Description: faker.lorem.words(10),
            BarCode:     faker.string.alphanumeric(12),
            Brand:       faker.company.name(),
            CategoryId:  randomCategory.Id,
            UnitId:      randomUnit.Id,
            CreatedDate: new Date(),
            UpdatedDate: new Date(),
        });
    }

    await prisma.product.createMany({ data: productsToInsert });
    console.log("   ✅ Catálogo expandido con éxito.");

    // ─── 4. ALACENAS ──────────────────────────────────────────────────────────
    console.log("🏪 Creando 5 alacenas de prueba...");
    const existingProducts = await prisma.product.findMany({ select: { Id: true } });

    const pantries: number[] = [];
    for (let i = 0; i < 5; i++) {
        const newPantry = await prisma.pantry.create({
            data: {
                Name:   `Alacena ${faker.person.firstName()}`,
                UserId: 1,
            },
        });
        pantries.push(newPantry.Id);
    }
    console.log(`   ✅ ${pantries.length} alacenas creadas.`);

    // ─── 5. PANTRY ITEMS ──────────────────────────────────────────────────────
    console.log("📦 Generando 5,000 PantryItems dinámicos...");
    const itemsToInsert: any[] = [];

    for (let i = 0; i < 5000; i++) {
        const randomProduct = existingProducts[Math.floor(Math.random() * existingProducts.length)];
        const randomPantryId = pantries[Math.floor(Math.random() * pantries.length)];

        itemsToInsert.push({
            ProductId:      randomProduct.Id,
            PantryId:       randomPantryId,
            Quantity:       faker.number.int({ min: 1, max: 100 }),
            ExpirationDate: faker.date.future({ years: 8 }),
            CreatedDate:    new Date(),
            UpdatedDate:    new Date(),
        });
    }

    console.log(`🚀 Enviando ${itemsToInsert.length} registros en un solo viaje a SQL Server...`);
    await prisma.pantryItem.createMany({ data: itemsToInsert });

    console.log("✅ ¡Stress-seed finalizado con éxito!");
}

runStressSeed();