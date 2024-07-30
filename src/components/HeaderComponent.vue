<script setup>
</script>
<template>
    <section class="w-full  -red-400 p-0 relative">

        <img src="@/assets/images/light-tl.png" class="absolute -top-8 left-0 w-[35rem] z-50" alt="kliquex">
        <img src="@/assets/images/light-tr.png" class="absolute -top-8 right-0 w-[35rem] z-50" alt="kliquex">
        <img src="@/assets/images/mid_light.png" class="absolute -bottom-52 left-0 w-[22rem] z-50" alt="kliquex">
        <img src="@/assets/images/mid_light.png" class="absolute -bottom-52 right-0 w-[22rem] z-50 rotate-180"
            alt="kliquex">

        <main class="w-full max-w-7xl mx-auto p-4  relative">
            <!-- nav     -->
            <nav class="w-full  p-4 mt-10 mb-20">
                <img src="@/assets/images/logo.png" class="w-56" alt="kliquex">
            </nav>

            <!-- hero divider -->
            <div class="flex flex-col md:flex-row  justify-center ">
                <div class="w-full md:w-1/2   ">
                    <h1 class="text-red-600 font-bold text-5xl mb-10 text-center md:text-left">Mais que uma agência.
                    </h1>
                    <p class="text-white text-[2.2rem] text-center md:text-left  font-light">Somos uma empresa de
                        marketing
                        digital
                        dedicada a
                        impulsionar o
                        sucesso
                        dos
                        negócios <span class="text-red-600">online.</span></p>

                    <p class="text-gray-300 my-10 text-2xl text-center md:text-left">
                        Com uma abordagem criativa e estratégica, <br> oferecemos
                        soluções
                        personalizadas
                        para atender <br> às
                        necessidades individuais de cada cliente.</p>


                    <div class="flex justify-center md:justify-start">

                        <button
                            class=" px-24 py-5 bg-red-600 text-white font-bold rounded-lg mt-4 hover:shadow-lg hover:shadow-red-500  transition-all ">QUERO
                            FAZER UMA
                            CONSULTA</button>
                    </div>
                </div>
                <div class="w-full md:w-1/2 relative">
                    <img src="@/assets/images/hero_img.png"
                        class=" relative z-10 mt-10  md:-top-[7rem] md:-left-[3rem] w-full" alt="kliquex"
                        data-aos="fade-up-left">
                </div>
            </div>

            <!-- instruct -->
            <div class="w-full p-4 mt-10">
                <div class="w-full text-center text-white ">
                    <h1 class="text-3xl font-extrabold">COMO FUNCIONA NOSSO OPERACIONAL?</h1>
                    <p class="text-2xl"><span class="text-red-500 ">Nossa agência</span> se baseia em 4 pilares de
                        atuação</p>
                </div>

                <div class="w-full flex justify-center mt-20" data-aos="fade-up-left">
                    <img src="@/assets/images/pilares.png" class="w-[60rem]" alt="kliquex">

                </div>
            </div>


            <!-- services -->
            <section>

            </section>



        </main>
    </section>
</template>
