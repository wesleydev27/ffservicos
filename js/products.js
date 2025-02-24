// ARRAY DE PRODUTOS
const products = [
    {
        name: "Assento para vaso sanitário",
        service: "Instalação",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_817625-MLU75151960170_032024-F.webp",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    },
    {
        name: "Suporte de tv e tv até 50",
        service: "Instalação",
        image: "https://a-static.mlcdn.com.br/800x560/suporte-tv-50-58-60-65-70-75-polegadas-articulado-elg/amplinet/3657-1135/4af3dba0854d0d7e6172881f91c4f439.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    },
    {
        name: "Tela de animais linear",
        service: "Instalação",
        image: "https://www.telasparana.com.br/img/produtos/b6d9ae10bb34f1dada8c694b8010d94f.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    },
    {
        name: "Pega ladrão para porta",
        service: "Instalação",
        image: "https://cdn.leroymerlin.com.br/products/trinco_pega_ladrao_aco_niquelado_1_peca_90398546_f849_600x600.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    },
    {
        name: "Persiana",
        service: "Instalação",
        image: "https://persianas2go.com.br/cdn/shop/files/Persiana-Double-Vision-Semi-Blackout-XL-Perola_d032abd2-aec2-43f7-b3a5-f5cd6587b04f.png",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Protetor passaros telhado",
        service: "Instalação",
        image: "https://http2.mlstatic.com/D_NQ_NP_857629-MLB52182776350_102022-O.webp",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Painel para tv",
        service: "Instalação",
        image: "https://images.tcdn.com.br/img/img_prod/631328/painel_suspenso_para_tv_de_ate_55_lets_moveis_hb_5215_1_79039580b40be89d75b188d189a382a0.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Número de imovel",
        service: "Instalação",
        image: "https://acdn.mitiendanube.com/stores/002/823/094/products/placa-numero-de-casa-acrilico-41-acb139332adef42d1216812213129442-1024-1024.webp",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Olho magico para porta",
        service: "Instalação",
        image: "https://blogdocftv.com/wp-content/uploads/2020/02/olho-magico-para-portas.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Gabinete de banheiro",
        service: "Instalação",
        image: "https://images-americanas.b2w.io/produtos/7490453704/imagens/balcao-gabinete-banheiro-milao-com-cuba-100-mdf-60cm/7490453707_1_large.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Espelho",
        service: "Instalação",
        image: "https://m.media-amazon.com/images/I/81ZZzEontiL._AC_SX679_.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Faixa anti derrapante",
        service: "Instalação",
        image: "https://down-br.img.susercontent.com/file/3a5e0169160356e1069c99be9b02d3b5",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Chuveiro eletrico plastico comum",
        service: "Instalação, troca",
        image: "https://amoedo.vtexassets.com/arquivos/ids/164525-1200-1600?v=638209825055330000&width=1200&height=1600&aspect=true",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Chuveiro tipo ducha",
        service: "Instalação, troca",
        image: "https://s2-casaejardim.glbimg.com/9r_tjChWaFFj3diV4ONsEUjoIOI=/0x0:888x666/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_a0b7e59562ef42049f4e191fe476fe7d/internal_photos/bs/2024/R/n/To1jbAT0K3tVHA6sBLeA/chuveiro-com-ducha-lorenzetti-acqua-duo-127v-5500w-preto-fosco-7510144-a.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Chuveiro Turbo",
        service: "Instalação, troca",
        image: "https://images.tcdn.com.br/img/img_prod/763413/chuveiro_eletrico_lorenzetti_duo_shower_turbo_multetemperatura_branco_7500w_220v_5973_1_20200429140556.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Acessórios para cozinha",
        service: "Instalação, troca",
        image: "https://blog.thony.com.br/wp-content/uploads/2015/05/acessorios-para-cozinha.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Varal",
        service: "Instalação",
        image: "https://lojamor.vteximg.com.br/arquivos/ids/159683-1000-1000/006023-Varal-Sanfonado-120-1.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Puxador de porta",
        service: "Instalação",
        image: "https://images.tcdn.com.br/img/img_prod/894333/kit_2_puxadores_de_porta_de_correr_classic_uniao_mundial_10_cm_cromado_587_1_75e16cfef6f13addd7ec67037ed4dbb3.png",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Instalação de ar condicionado",
        service: "Instalação",
        image: "https://www.jefferson.ind.br/uploads/conteudo/conteudo/2017/07/xEWaP/22afb5e14d919910530ec775bdf697f8cd5238b273015b734cpimgpsh-fullsize-distr-D0pHbl_600x450.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Placa de sinalização de ambiente",
        service: "Instalação",
        image: "https://images.tcdn.com.br/img/img_prod/81/placa_de_sinalizacao_ambiente_monitorado_62805_1_1a6f436c5914faffcf438ed1fbe4e037.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Movimentação de móveis",
        service: "Movimentação",
        image: "https://bravatransportesemudancas.com.br/wp-content/uploads/2023/08/empresa-de-icamento.webp",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Suporte para micro-ondas",
        service: "Instalação",
        image: "https://images.tcdn.com.br/img/img_prod/464234/kit_04_suportes_suspensos_para_micro_ondas_forno_60x40_cm_class_l03_amadeirado_lyam_51529_2_d564f07f6dff10f40fc535af2b1a1272.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Metais para banheiro",
        service: "Instalação",
        image: "https://duconmetais.com.br/media/catalog/product/cache/1/image/1000x/9df78eab33525d08d6e5fb8d27136e95/1/_/1_11_1.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Limpeza de ar condicionado de janela",
        service: "Reparo",
        image: "https://refrigeracao.tokpolar.com.br/manutencao-de-ar-condicionado/imagens/limpeza-ar-condicionado-de-janela-valor.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Prateleira",
        service: "Instalação",
        image: "https://http2.mlstatic.com/D_NQ_NP_937289-MLB73961242974_012024-O.webp",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    },

    {
        name: "Limpeza de ar condicionado split",
        service: "Reparo",
        image: "https://www.ohub.com.br/ideias/wp-content/uploads/2020/07/Limpeza-ar-condicionado-oHub-660x330.png",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,

    {
        name: "Limpeza de chuveiro",
        service: "Reparo",
        image: "https://s2-casaejardim.glbimg.com/Uq1rkYMnUs2iDHBPnpi0PpPx6kY=/0x0:2121x1414/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_a0b7e59562ef42049f4e191fe476fe7d/internal_photos/bs/2025/p/B/4LIuyVRGeIGZkuiAcsgA/como-limpar-chuveiro-gettyimages-casaejardim.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,

    {
        name: "Barra Acessivel",
        service: "Instalação",
        image: "https://http2.mlstatic.com/D_NQ_NP_806070-MLU78232951499_082024-O.webp",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,

    {
        name: "Quadro decorativo",
        service: "Instalação",
        image: "https://acdn-us.mitiendanube.com/stores/004/920/092/products/quadro-decorativo-paisagens-por-do-sol-moldura-e-vidro-sala-decoracoes-c634a033d7dc3df95517216197343842-640-0.webp",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }

    ,

    {
        name: "Cortina",
        service: "Instalação",
        image: "https://images.tcdn.com.br/img/img_prod/860511/cortina_duplex_monaco_5_40x2_50m_branco_bella_janela_1121_1_280d842815b31309642c8af128ff74d9.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }

    ,

    {
        name: "Ventilador de teto",
        service: "Instalação",
        image: "https://m.media-amazon.com/images/I/41TbQ7HX11L._AC_SX679_.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }

    ,

    {
        name: "Caixa de correio",
        service: "Instalação",
        image: "https://http2.mlstatic.com/D_NQ_NP_944464-MLB78599288031_082024-O.webp",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }

    ,

    {
        name: "Dobradiça de armário",
        service: "Instalação",
        image: "https://images.tcdn.com.br/img/img_prod/651731/dobradica_de_pressao_para_movel_convencional_35mm_110o_22_variacao_82_1_20220509164648.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,

    {
        name: "Fechadura",
        service: "Instalação,Troca",
        image: "https://images.tcdn.com.br/img/img_prod/842372/fechadura_pivotante_para_porta_de_passagem_cromado_ros34_7833_1_f5157e3ce178cfbdbe6065dc2dde13bd.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,

    {
        name: "Folha de porta de madeira",
        service: "Instalação",
        image: "https://product-hub-prd.madeiramadeira.com.br/705718/images/1d79a67e-e5b7-4ad3-81fd-5fa15ebcf3d6eedc8970526d0f04710Lateral.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,

    {
        name: "Protetor para quina de parede",
        service: "Instalação",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_771031-MLB77442110158_072024-F.webp%202x",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,

    {
        name: "Tomada",
        service: "Instalação, Troca",
        image: "https://cdn.leroymerlin.com.br/products/tomada_dupla_fame_habitat_2p_t_20a_com_placa_4x2_branco_1570752212_bbe5_600x600.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Tomada 110v p 220v",
        service: "Instalação, Troca",
        image: "https://img.elo7.com.br/product/zoom/EA9753/adesivo-painel-eletrico-tomada-110-220-painel-eletrico.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Resistência de chuveiro",
        service: "Instalação, Troca",
        image: "https://lojastamoyo.fbitsstatic.net/img/p/resistencia-chuveiro-advanced-eletronico-7500-w-lorenzetti-89632/276185.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Sensor de presença",
        service: "Instalação, Troca",
        image: "https://bravalumi.cdn.magazord.com.br/img/2022/02/produto/2063/sensor-de-presenca-intelbras-para-iluminacao-articulado-espi-360a-bivolt.png",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Reator",
        service: "Instalação, Troca",
        image: "https://www.eletrofm.com.br/img/products/reator-convencional-2-x-65w-220v-intral_1_1000.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }

    ,
    {
        name: "Lampada par ou dicroica",
        service: "Instalação, Troca",
        image: "https://images.tcdn.com.br/img/img_prod/1249590/lampada_led_dicroica_par16_dimerizavel_gu10_36o_2700k_7w_bivolt_437377_brilia_271_1_faca627a22b6acf5ad7ac103809e22e0.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Luminária",
        service: "Instalação, Troca",
        image: "https://lojaorganizeja.com/cdn/shop/files/PendenteLuminariaParaCozinhaModerna-UrbanGlow-lojaorganizeja.com_15_-Copia.webp",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Fiacão elétrica ar condicionado",
        service: "Instalação, Troca",
        image: "https://arcondicionadoararaquara.com.br/wp-content/uploads/2021/03/instalacao-eletrica-ar-condicionado-em-araraquara-aramaster-01.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Fiação eletrica de chuveiro",
        service: "Instalação, Troca",
        image: "https://images.homify.com/image/upload/v1618419710/p/diy/photos/ng8ooiigh1qctxq1ys8b.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Projeto elétrico",
        service: "Construção m2",
        image: "https://engehall.com.br/wp-content/uploads/2024/08/projetos-eletricos.webp",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Disjuntor",
        service: "Instalação, Troca",
        image: "https://lojaacal.vteximg.com.br/arquivos/ids/201121-1000-1000/Disjuntor-Triplo-Curva-C-16A-3P-TDJ3-3-3KA-Tramontina-Eletrica.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    },
    {
        name: "Lâmpada",
        service: "Instalação, troca, retirada",
        image: "https://eletroenergia.com.br/wp-content/uploads/2016/02/Design-sem-nome-5-scaled.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Canaleta plastica",
        service: "Instalação",
        image: "https://http2.mlstatic.com/D_NQ_NP_698241-MLB32568004041_102019-O.webp",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Interruptor",
        service: "Instalação, manutenção, troca",
        image: "https://images.tcdn.com.br/img/img_prod/625353/10_pcs_conjunto_interruptor_simples_10a_250v_vertical_slim_ilm0062_9729_1_20200403121708.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Cabeamento tv e internet",
        service: "Instalação",
        image: "https://nextcable.com.br/wp-content/uploads/2020/06/caboscat5678.01-1024x682@2x-1.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Exaustor de banheiro",
        service: "Instalação",
        image: "https://seubanheirointeligente.com.br/wp-content/uploads/2023/06/Como-instalar-o-Exaustor-para-Banheiro.png",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Vazamentos em canos",
        service: "Reparo",
        image: "https://graiche.com.br/wp-content/uploads/2021/07/Saiba-como-detectar-possiveis-vazamentos-de-agua-em-sua-casa-1.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Vazamentos em pia sifão",
        service: "Reparo",
        image: "https://triider-prd-blog-files.s3.sa-east-1.amazonaws.com/wp-content/uploads/2018/03/05201642/vazamento-de-agua-no-banheiro-como-identificar.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Torneira de parede",
        service: "Instalação",
        image: "https://http2.mlstatic.com/D_NQ_NP_682346-MLB74050416670_012024-O.webp",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Reparo de torneira",
        service: "Reparo",
        image: "https://cdn.awsli.com.br/600x450/47/47186/produto/28574134/0700120-n8uwiinh6t.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    },

    {
        name: "Torneira de bancada",
        service: "Instalação",
        image: "https://tikdecasa.com.br/wp-content/uploads/2023/06/15195370292_Torneira-Link-Bancada-Lavatorio-Banheiro-Mesa-Metal-Luxo-45o-Tik-de-Casa-Dazie-Metais-Daza-Me.webp",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Sifão",
        service: "Instalação",
        image: "https://cdn.awsli.com.br/600x450/158/158648/produto/10265437/2fa20a5cdc.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Ralo pia valvula",
        service: "Instalação",
        image: "https://cdn.awsli.com.br/600x1000/2562/2562222/produto/203385601/3-18ka65m3qm.png",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Descarga de vaso valvula hydra",
        service: "Instalação",
        image: "https://cdn.leroymerlin.com.br/products/valvula_descarga_cobre_hydra_clean_cromado_3_80_cm_deca_86605722_0001_600x600.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Ducha higiênica",
        service: "Instalação",
        image: "https://cdn.awsli.com.br/600x450/47/47186/produto/38491304/a1382aa9e6.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Filtro de água",
        service: "Instalação",
        image: "https://cdn.awsli.com.br/2541/2541980/produto/202404299/82122145fce56dc2df-karatn.jpg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Registo",
        service: "Instalação, Troca",
        image: "https://cdn.awsli.com.br/600x700/2684/2684876/produto/244017584/fst_5982-btgeizd283.jpeg",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
    ,
    {
        name: "Limpeza de caixa d'água",
        service: "Limpeza",
        image: "https://caixaforte.ind.br/wp-content/uploads/2024/02/caixa-forte.png",
        link: "https://wa.me/5511959925225?text=Ol%C3%A1%20eu%20vim%20do%20seu%20site%20FF%20Servi%C3%A7os%20e%20gostaria%20de%20um%20or%C3%A7amento%20"
    }
];
// Embaralha a ordem dos produtos
//products.sort(() => Math.random() - 0.5);



// SELECIONANDO ELEMENTOS NO HTML
const productsContainer = document.getElementById("products-container");
const searchModalOverlay = document.getElementById('search-modal-overlay');
const searchForm = searchModalOverlay.querySelector('form');
const searchInput = searchForm.querySelector('input');
const noResultsModal = document.getElementById('no-results-modal');
const noResultsMessage = noResultsModal.querySelector('.message');
const closeNoResultsButton = noResultsModal.querySelector('.close-button');

// FUNÇÃO PARA EXIBIR TODOS OS PRODUTOS
const displayProducts = (filteredProducts, query = '') => {
    productsContainer.innerHTML = ''; // Limpa o container antes de adicionar os produtos
    if (filteredProducts.length > 0) {
        filteredProducts.forEach((product, index) => {
            const card = document.createElement("div");
            card.className = "relative bg-cover bg-center p-4 shadow rounded text-center w-full flex justify-center items-center flex-col gap-1 before:absolute before:inset-0 before:bg-[var(--black)] before:opacity-50 before:rounded p-8 transition-transform duration-300 hover:scale-105 cursor-pointer";
            card.style.backgroundImage = `url('${product.image}')`;
            card.setAttribute('data-index', index);

            card.innerHTML = `
                <h3 class="relative text-xl text-[var(--white)] font-semibold p-1">
                    ${product.name}
                </h3>
                <p class="relative text-[var(--primary)] text-sm font-bold">Serviço: ${product.service}</p>
                <a href="${product.link}" class="relative flex items-center mx-auto bg-[var(--green-whatsapp)] text-[var(--white)] px-8 py-1 rounded-md transition-all duration-300 font-medium">
                    Solicitar agora
                </a>
            `;
            productsContainer.appendChild(card);

            // Se houver uma busca, destacamos o primeiro resultado e centralizamos
            if (query && index === 0) {
                setTimeout(() => {
                    highlightProduct(card);
                }, 300); // Tempo de espera curto para garantir que o elemento seja renderizado
            }
        });

        noResultsModal.classList.add('hidden'); // Esconde o modal de "Nenhum produto encontrado"
    } else {
        noResultsMessage.textContent = "Nenhum produto encontrado";
        noResultsModal.classList.remove('hidden'); // Exibe o modal de "Nenhum produto encontrado"
        searchModalOverlay.classList.add('hidden'); // Esconde o modal de busca ao mostrar o de "Nenhum produto encontrado"
        searchInput.value = ''; // Limpa o campo de busca
    }
};

// Destacar e centralizar um produto encontrado
const highlightProduct = (productElement) => {
    searchModalOverlay.classList.add('hidden'); // Fecha o modal de busca
    productElement.classList.add('border-4', 'border-yellow-500', 'animate-pulse'); // Adiciona borda e animação

    // Centraliza o produto na tela
    productElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

    // Remove o destaque após 2 segundos
    setTimeout(() => {
        productElement.classList.remove('border-4', 'border-yellow-500', 'animate-pulse');
    }, 2000);
};

// Exibe todos os produtos inicialmente
displayProducts(products);

// FILTRO DE BUSCA DE PRODUTOS
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();

    if (query.length >= 3) {
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(query) || product.service.toLowerCase().includes(query)
        );
        displayProducts(filteredProducts, query);
    } else {
        // Se a busca tiver menos de 3 caracteres, exibe todos os produtos
        displayProducts(products);
    }
});

// Abrir o modal de busca
const openSearchModal = () => {
    searchModalOverlay.classList.remove('hidden');
    searchInput.value = ''; // Limpa o campo de busca ao abrir o modal
    searchInput.focus(); // Foca no input automaticamente
    displayProducts(products); // Exibe todos os produtos novamente ao abrir o modal
};

// Fechar o modal de busca
const closeSearchModal = () => {
    searchModalOverlay.classList.add('hidden');
    searchInput.value = ''; // Limpa o campo de busca ao fechar o modal
};

// Evento para fechar o modal de busca ao clicar fora
searchModalOverlay.addEventListener('click', (e) => {
    if (e.target === searchModalOverlay) {
        closeSearchModal();
    }
});

// Função para fechar o modal de "Nenhum produto encontrado"
const closeNoResultsModal = () => {
    noResultsModal.classList.add('hidden');
    searchInput.value = ''; // Limpa o campo de busca ao fechar o modal de erro
    displayProducts(products); // Exibe todos os produtos novamente
};

// Evento de fechamento do modal de "Nenhum produto encontrado"
closeNoResultsButton.addEventListener('click', closeNoResultsModal);

// Para abrir o modal de busca (por exemplo, em um botão ou outra ação)
const searchButton = document.getElementById('open-search-button');
if (searchButton) {
    searchButton.addEventListener('click', openSearchModal);
} else {
    console.error("O botão de busca não foi encontrado no DOM.");
}