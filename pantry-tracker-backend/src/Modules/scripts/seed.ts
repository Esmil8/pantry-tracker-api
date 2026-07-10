import { prisma } from "../../Shared/Databases/Prisma";


async function seed() {

    const units = [
        { id: 1, Name: 'Pound', Abbreviation: 'lb' },
        { id: 2, Name: 'Kilogram', Abbreviation: 'kg' },
        { id: 3, Name: 'Unit', Abbreviation: 'un' },
        { id: 4, Name: 'Liter', Abbreviation: 'l' },
        { id: 5, Name: 'Ounce', Abbreviation: 'oz' },
        { id: 6, Name: 'Gram', Abbreviation: 'g' },
    ];

    for (const unit of units) {
        await prisma.unit.upsert({
            where: { Id: unit.id },
            update: {},
            create: {
                Name: unit.Name,
                Abbreviation: unit.Abbreviation
            }
        })
    }
    console.log(' Units seeded successfully');
    const categories = [
        {
            id: 1,
            Name: 'Grains & Cereals',
            Description: 'Basic staples like rice, pasta, oats, and various cereal grains.'
        },
        {
            id: 2,
            Name: 'Dairy Products',
            Description: 'Milk-based items including cheese, yogurt, butter, and cream.'
        },
        {
            id: 3,
            Name: 'Meats & Poultry',
            Description: 'Fresh and processed meat products like beef, chicken, and pork.'
        },
        {
            id: 4,
            Name: 'Canned Goods',
            Description: 'Preserved food items in cans or jars with long shelf life.'
        },
        {
            id: 5,
            Name: 'Beverages',
            Description: 'Drinks including water, sodas, juices, coffee, and tea.'
        },
        {
            id: 6,
            Name: 'Fruits & Vegetables',
            Description: 'Fresh produce including seasonal fruits and garden vegetables.'
        },
        {
            id: 7,
            Name: 'Snacks',
            Description: 'Quick bites, chips, crackers, and sweet treats.'
        },
    ];

    for (const cat of categories) {
        await prisma.category.upsert({
            where: { Id: cat.id },
            update: {},
            create: {
                Name: cat.Name,
                Description: cat.Description
            },
        });
    }
    console.log(' Categories seeded successfully');

    const products = [
        {
            Name: 'White Rice',
            Description: 'Long grain premium white rice, 99% grain integrity.',
            BarCode: '744100000001',
            CategoryId: 1,
            UnitId: 1,
            Brand: 'Premium'
        },
        {
            Name: 'Whole Milk',
            Description: 'Fresh whole milk fortified with Vitamin D.',
            BarCode: '744100000002',
            CategoryId: 2,
            UnitId: 4,
            Brand: 'DairyGold'
        },
        {
            Name: 'Tuna Chunk',
            Description: 'Light tuna chunks in water, high protein.',
            BarCode: '744100000003',
            CategoryId: 4,
            UnitId: 3,
            Brand: 'SeaFood'
        },
        {
            Name: 'Black Beans',
            Description: 'Grown locally, rich in fiber and iron.',
            BarCode: '744100000004',
            CategoryId: 1,
            UnitId: 1,
            Brand: 'Organic'
        },
    ];

    for (const prod of products) {
        await prisma.product.upsert({
            where: {
                BarCode: prod.BarCode
            },
            update: {},
            create: prod,
        });
    }
    console.log(' Basic products seeded ');

    console.log(' Seeding finished successfully.');

}

seed()