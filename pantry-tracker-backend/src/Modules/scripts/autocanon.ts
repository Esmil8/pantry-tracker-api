import autocannon from 'autocannon';
import dotenv from 'dotenv';
dotenv.config();

async function startBenchmark() {
    console.log("🚀 Iniciando proceso de Benchmark...");

    // 1. Obtener el Token (Autenticación Automática)
    // Cambia la URL y el body según tu API de Auth
    const authResponse = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Email: process.env.EMAIL_ADDRESS, // Tus credenciales de prueba
            Password: process.env.EMAIL_PASSWORD
        })
    });

    const responseJson = await authResponse.json();

    if (!authResponse.ok) {
        console.error("❌ Fallo al iniciar sesión:", responseJson);
        return;
    }

    const token = responseJson.Data?.token;

    if (!token) {
        console.error("❌ No se pudo obtener el token. Abortando...");
        return;
    }

    console.log("✅ Token obtained. Shooting charge attack...");



    const runBenchmark = (options: autocannon.Options, name: string): Promise<autocannon.Result> => {
        return new Promise((resolve, reject) => {
            console.log(`Starting Benchmark of ${name}...`);
            const instance = autocannon(options, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
            autocannon.track(instance, { renderProgressBar: true });
        });
    };

    // try {
    //     await runBenchmark({
    //         url: 'http://localhost:8000/auth/login',
    //         connections: 20,
    //         duration: 10,
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             Email: process.env.EMAIL_ADDRESS,
    //             Password: process.env.EMAIL_PASSWORD
    //         })
    //     }, "Auth Login");
    //     console.log("Benchmark of Auth Login finished successfully.");
    // } catch (err) {
    //     console.error("Error in Benchmark of Auth:", err);
    // }

    try {
        await runBenchmark({
            url: 'http://localhost:8000/pantry/1',
            connections: 20,
            duration: 10,
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'application/json'
            }
        }, "Pantry");
        console.log("Benchmark of Pantry finished successfully.");
    } catch (err) {
        console.error("Error in Benchmark of Pantry:", err);
    }



    try {
        await runBenchmark({
            url: 'http://localhost:8000/pantry/1/items',
            connections: 20,
            duration: 10,
            headers: {
                Authorization: `Bearer ${token}`,
                'content-type': 'application/json'
            }
        }, "PantryItems");
        console.log("Benchmark of PantryItems finished successfully.");
    } catch (err) {
        console.error("Error in Benchmark of PantryItems:", err);
    }
    await runBenchmark({
        url: 'http://localhost:8000/pantry/1/items?status=CRITICAL', // 👈 ¡Inyectamos el filtro aquí!
        connections: 20,
        duration: 10,
        headers: { Authorization: `Bearer ${token}` }
    }, "PantryItems - Filtro Crítico");

    // 3. Configurar e iniciar Benchmark de Products de forma secuencial
    try {
        await runBenchmark({
            url: 'http://localhost:8000/products',
            connections: 20,
            duration: 10,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }, "Products");
        console.log(" Benchmark of Products finished successfully.");
    } catch (err) {
        console.error("Error in Benchmark of Products:", err);
    }
}

startBenchmark();