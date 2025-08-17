document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-imc");
    const resultadoDiv = document.getElementById("resultado-imc");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Tomar los valores del formulario
        const datos = {
            cc: document.getElementById("cc").value,
            nombre: document.getElementById("nombre").value,
            apellido: document.getElementById("apellido").value,
            edad: document.getElementById("edad").value,
            peso: document.getElementById("peso").value,
            altura: document.getElementById("altura").value,
            genero: document.getElementById("genero").value
        };

        try {
            // Enviar datos al backend
            const res = await fetch("http://localhost:3000/usuarios", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(datos)
            });

            if (!res.ok) {
                throw new Error("Error al guardar usuario");
            }

            const data = await res.json();

            // Mostrar IMC calculado por el trigger
            resultadoDiv.textContent = `IMC calculado: ${data.imc}`;
            resultadoDiv.style.color = "green";
            resultadoDiv.style.fontWeight = "bold";

            // Limpiar formulario
            form.reset();
        } catch (error) {
            console.error("Error:", error);
            resultadoDiv.textContent = "Ocurrió un error al calcular el IMC";
            resultadoDiv.style.color = "red";
        }
    });
});