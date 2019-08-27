$(document).ready(() => {
    let sliderData = [
        {
            image: "./assets/images/gints-gailis-dn8xoYmzLZg-unsplash.jpg",
            content: `  <div class="big-dialog">
                            <p class="dialog-content">Membangun Infrastruktur PUPR <br> menuju <span class="regular-highlight">Indonesia Emas 2045</span></p>
                        </div>`
        },
        {
            image: "./assets/images/suramadu.jpg",
            content: `  <div class="dialog">
                            <h1 class="title">Pemerataan Infrastruktur Konektivitas Antar Wilayah</h1>
                            <div class="dialog-content cols-2">
                                <div class="col-1">
                                    <p>Sistem transportasi untuk mendukung mobilitas penduduk dan distribusi barang antar wilayah.</p>
                                    <p>Akses perekonomian di Kawasan Timur Indonesia diawali dengan pembangunan kota-kota dan memanfaatkan potensi jalur perdagangan internasional.</p>
                                </div>
                            </div>
                        </div>`
        },
        {
            image: "./assets/images/silas-baisch-9cdo9r9Fors-unsplash.jpg",
            content: `  <div class="dialog">
                            <h1 class="title">Pemerataan Infrastruktur Prasarana Perkotaan dan Pedesaan</h1>
                            <div class="dialog-content cols-2">
                                <div class="col-1">
                                    <h2 class="sub-title">Infrastruktur Perkotaan Ramah Lingkungan</h2>
                                    <ul>
                                        <li>Peningkatan Rumah Vertikal</li>
                                        <li>Rumah Bergerak / Terapung / Underground</li>
                                        <li>Desain Futuristik dan Minimalis</li>
                                        <li>Hemat Energi</li>
                                        <li>Housing System Information</li>
                                    </ul>
                                </div>

                                <div class="col-2">
                                    <h2 class="sub-title">Infrastruktur Pedesaan</h2>

                                    <ul>
                                        <li>Penguatan ciri khas budaya lokal / local wisfom</li>
                                        <li>Peningkatan Aksesibilitas transportasi</li>
                                    </ul>
                                </div>
                            </div>
                        </div>`
        },
        {
            image: "./assets/images/dam-4260531_1920.jpg",
            content: `  <div class="dialog">
                            <h1 class="title">Pemerataan Infrastruktur Prasarana Dasar dan Lingkungan</h1>
                            <div class="dialog-content cols-3">
                                <div class="col-1">
                                    <p>Akses Masyarakat Terhadap prasarana dasar dipenuhi untuk kebutuhan perumahan, air minum, sanitasi, irigasi, dan perlinfungan terhadap bencana dan dampak perubahan iklim.</p>
                                </div>

                                <div class="col-2">
                                    <p>Ketersediaan air baku untuk irigasi, perkotaan, dan industri dipenuhi dengan pembangunan waduk dan sistem distribusi air baku.</p>
                                </div>

                                <div class="col-3">
                                    <p>Konservasi dan rehabilitasi seperti Daerah Aliran Sungai, Danau, Pantai juga akan didukung oleh pembangunan inftastruktur.</p>
                                </div>
                            </div>
                        </div>`
        }
    ];

    let slider = {
        interval: undefined,
        isPaused: false,
        imageTimeout: undefined,
        index: 0,
        init: () => {
            slider.index = 0;
            $("#slider-bg").css("background-image", "url('"+sliderData[0].image+"')");
            $("#main-content-inner").html(sliderData[0].content);

            $("#slider-bar-container").empty();
            for (let i = 0; i < sliderData.length; i++) {
                let sliderBar;

                if (i == 0) {
                    sliderBar = `<div class="slider-bar active"></div>`;
                }
                else {
                    sliderBar = `<div class="slider-bar"></div>`;
                }

                $("#slider-bar-container").append(sliderBar);
            }

            $(".slider-bar").on("click", event => {
                let idx = $(".slider-bar").index(event.currentTarget);

                slider.gotoSlide(idx);
            })

            $("#main-content-inner").on("mouseover", event => {
                slider.isPaused = true;
            })

            $("#main-content-inner").on("mouseleave", event => {
                slider.isPaused = false;
            })

            clearInterval(slider.interval);
            slider.interval = setInterval(() => {
                if (!slider.isPaused) {
                    slider.next();
                }
            }, 5000);
        },
        gotoSlide: idx => {
            $("#slider-bg").addClass("fade");
            clearInterval(slider.imageTimeout);
            slider.imageTimeout = setTimeout(() => {
                $("#slider-bg").css("background-image", "url('"+sliderData[idx].image+"')");
                $("#slider-bg").removeClass("fade");
            }, 380);
            $("#main-content-inner").html(sliderData[idx].content);
            $(".slider-bar.active").removeClass("active");
            $($(".slider-bar")[idx]).addClass("active");

            slider.index = idx;
        },
        next: () => {
            slider.index++;
            if (slider.index >= sliderData.length) {
                slider.index = 0;
            }

            slider.gotoSlide(slider.index);
        },
        prev: () => {
            slider.index--;
            if (slider.index < 0) {
                slider.index = sliderData.length - 1;
            }

            slider.gotoSlide(slider.index);
        }
    }

    slider.init();
})