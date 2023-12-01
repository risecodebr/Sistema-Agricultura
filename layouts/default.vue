<script setup lang="ts">
import "../assets/css/default.scss";
</script>
<template>
    <header>
        <div class="container-fluid">
            <div>
                <h2 >Sistema Agrícola</h2>
            </div>
            <div class="navb-items">
                <div class="item">
                    <a href="/dashboard" class="navb-item">Home</a>
                </div>
                <div class="item">
                    <a href="/dashboard/usuarios" class="navb-item">Usuários</a>
                </div>
                <div class="item">
                    <a href="/dashboard/propriedades" class="navb-item">Propriedades</a>
                </div>
            </div>

            <!-- Button trigger modal -->
            <div class="mobile-toggler">
                <a href="#" data-bs-toggle="modal" data-bs-target="#navbModal">
                    adasdasdsad
                </a>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="navbModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
                        </div>

                        <div class="modal-body">
                            
                            <div class="modal-line">
                                <i class="fa-solid fa-house"></i><a href="/">Home</a>
                            </div>

                            <div class="modal-line">
                                <i class="fa-solid fa-bell-concierge"></i><a href="/services">Services</a>
                            </div>

                            <div class="modal-line">
                                <i class="fa-solid fa-file-lines"></i> <a href="/cases">Cases</a>
                            </div>

                            <div class="modal-line">
                                <i class="fa-solid fa-circle-info"></i><a href="/about">About</a>
                            </div>

                            <a href="/contact" class="navb-button" type="button">Let's talk</a>
                        </div>

                        <div class="mobile-modal-footer">
                            
                            <a target="_blank" href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a target="_blank" href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                            <a target="_blank" href="#"><i class="fa-brands fa-youtube"></i></a>
                            <a target="_blank" href="#"><i class="fa-brands fa-facebook"></i></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </header>
    <div class="main">
        <slot />
    </div>
</template>