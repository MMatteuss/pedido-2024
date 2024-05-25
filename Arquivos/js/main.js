const button = document.getElementById('moveButton');
    const distance = 50;
    var link = "https://web.whatsapp.com/"; //Link do zap
    var button1 = document.getElementById('redirectButton');

    button.addEventListener('mousemove', (event) => {
        const rect = button.getBoundingClientRect();
        const x = event.clientX;
        const y = event.clientY;
        const buttonX = rect.left + rect.width / 2;
        const buttonY = rect.top + rect.height / 2;

        const deltaX = x - buttonX;
        const deltaY = y - buttonY;

        if (Math.abs(deltaX) < distance && Math.abs(deltaY) < distance) {
            const offsetX = (Math.random() - 0.5) * window.innerWidth * 0.8;
            const offsetY = (Math.random() - 0.5) * window.innerHeight * 0.8;

            let newLeft = rect.left + offsetX;
            let newTop = rect.top + offsetY;

            // Evita que o botão saia da tela
            if (newLeft < 0) newLeft = 0;
            if (newTop < 0) newTop = 0;
            if (newLeft + rect.width > window.innerWidth) newLeft = window.innerWidth - rect.width;
            if (newTop + rect.height > window.innerHeight) newTop = window.innerHeight - rect.height;

            button.style.left = newLeft + 'px';
            button.style.top = newTop + 'px';
        }
    })

    function apertou(){
        alert("não aceito NÃO como resposta")
    }

        let verFal = false;
        function acaoSucesso() {
            Swal.fire({
                title: 'Titulo',
                text: 'Texto',
                confirmButtonText: 'OK',
                showLoaderOnConfirm: true,
                preConfirm: () => {
                    window.location.href = link;
                    return true; 
                }
            });  
        }

        const redirectButton = document.getElementById('redirectButton');
        redirectButton.addEventListener('click', function() {
            Swal.fire({
                title: 'Titule',
                text: 'Texto',
                showCancelButton: true,
                confirmButtonText: 'Sim',
                cancelButtonText: 'Não',
                showLoaderOnConfirm: true,
                preConfirm: () => {
                    verFal = true; 
                    verdadeiro();
                }
            })
            .then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        '******',
                        'Obrigado!',
                        'success'
                    ).then((result) => {
                        if (result.isConfirmed) {
                            acaoSucesso(); 
                        }
                    });
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire({
                        title: 'Titulo',
                        text: 'Texto',
                        showLoaderOnConfirm: true,
                        confirmButtonText: 'Sim',
                        preConfirm: () => {
                            verFal = true; 
                            verdadeiro();
                            return true; 
                        }
                    }).then((result) => {
                        if (result.isConfirmed) {
                            acaoSucesso();
                        }
                    });
                }
            });
        });

        // function verdadeiro() {
        //     if (verFal === true) {
        //         Swal.fire({
        //             title: 'Titule',
        //             text: 'Texto',
        //             confirmButtonText: 'OK'
        //         }).then(() => {
        //             // Mostra o segundo alerta
        //             Swal.fire({
        //                 title: 'Titule',
        //                 text: 'Texto',
        //                 confirmButtonText: 'OK',
        //                 showLoaderOnConfirm: true,
        //                 preConfirm: () => {
        //                     acaoSucesso()
        //                     return true; 
        //                 }
        //             });
        //         });
        //     }
        // }