<script setup></script>
<template>
    <section class="w-full  -red-400 p-0 relative">

        <img src="@/assets/images/light-tl.png" class="absolute -top-8 left-0 w-[35rem]" alt="kliquex">
        <img src="@/assets/images/light-tr.png" class="absolute -top-8 right-0 w-[45rem]" alt="kliquex">

        <main class="w-full max-w-7xl mx-auto p-4  relative">
            <!-- nav     -->
            <nav class="w-full  p-4 my-10">
                <img src="@/assets/images/logo.png" class="w-56" alt="kliquex">
            </nav>

            <!-- hero divider -->
            <div class="w-full  p-4 mt-4 flex flex-row justify-between">
                <div class="w-4/6 ">
                    <h1 class="text-red-600 font-bold text-4xl mb-4">Mais que uma agência.</h1>
                    <p class="text-white text-4xl  font-sans ">Somos uma empresa de marketing digital
                        dedicada a
                        impulsionar o
                        sucesso
                        dos
                        negócios <span class="text-red-600">online.</span></p>

                    <p class="text-gray-300 mt-10 text-xl">Com uma abordagem criativa e estratégica, oferecemos
                        soluções
                        personalizadas
                        para atender às
                        necessidades individuais de cada cliente.</p>


                    <button
                        class="px-10 py-4 bg-red-600 text-white font-bold rounded-lg mt-4 hover:shadow-lg hover:shadow-red-500  transition-all ">QUERO
                        FAZER UMA
                        CONSULTA</button>
                </div>
                <div class="w-5/6  relative ">
                    <img src="@/assets/images/hero_img.png" class="absolute -top-14 w-full  " alt="kliquex">
                </div>
            </div>

            <!-- instruct -->
            <div class="w-full p-4 mt-40">
                <div class="w-full text-center text-white ">
                    <h1 class="text-3xl font-extrabold">COMO FUNCIONA NOSSO OPERACIONAL?</h1>
                    <p class="text-2xl"><span class="text-red-500 ">Nossa agência</span> se baseia em 4 pilares de
                        atuação</p>
                </div>

                <div class="w-full flex justify-center mt-20">
                    <img src="@/assets/images/pilares.png" class="w-[60rem]" alt="kliquex">

                </div>
            </div>



        </main>
    </section>
</template>