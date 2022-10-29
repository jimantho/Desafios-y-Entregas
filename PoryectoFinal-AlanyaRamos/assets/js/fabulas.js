const cargaPeliFabulas = async () => {
    try {
        const peliFabula = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4c48359ef7b392f0ebc03c8044c42c3f")
        console.log(peliFabula);


        if (peliFabula.status === 200) {
            const datos = await peliFabula.json();
            console.log(datos.results);

            let peliFabu = '';

            datos.results.forEach(item => {
                peliFabu += `
                <div class="pelicula"> 
                    <img class="poster" src="https://image.tmdb.org/t/p/w500/${item.poster_path}">
                    <h3>${item.title}</h3>
                </div>
                `
                
            });

            document.getElementById("contenedor").innerHTML = peliFabu;


        } else if (peliFabula.status === 401) {
            console.log("no se coloco bien el id");

        } else if (peliFabula.status === 404) {
            console.log("no se encuentra");
        } else {
            console.log("hay un error")
        }

    } catch (error) {
        console.log(error);
    }


}

cargaPeliFabulas();