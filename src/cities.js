var london = L.marker([51.5, -0.09]).bindPopup('London'),
	brussels    = L.marker([50.8, 4.36]).bindPopup('Brussels'),
	berlin    = L.marker([52.5, 13.4]).bindPopup('Berlin'),
    cologne    = L.marker([50.923, 6.94]).bindPopup('Cologne<br><img width="200px" src="images/dom.jpg"'),
    amsterdam = L.marker([52.3699, 4.8982]).bindPopup('<b>Amsterdam</b><br><img width="200px" src="images/amsterdam (1).jpg">'),
    pinchercreek = L.marker([49.31, -114.41]).bindPopup('<b>Castle Mountain</b><br><img width="200px" src="https://lh3.googleusercontent.com/nYt8bv_sNCc2zVQ3cW_7AN1N_CXfa46uF_CKpa2XnH7PXvu6IUEfh6cJVuDP5nl-UJaOaLbRu7MTDT2k5T2UsUDsHoyt0khy5o6T-H4hntdoeXzhomdxPZ3LN5MlD5THvASzQgAiEK_S7RPVj9joIkMNkaHcgoHXHxusoaWpeUvUOBPfPZs60iuHAkK-fAuJOLpvdjq-7Vau3LnW-_Yjdippzjew_hkPu2YLhV02xx1Tx0guSPXAsG90FVNolel4H3L-T0s1TYSjfTvyIpx60C7QSe3QcJypsODO012VR5npjyaMyasfnm7WTbD_vv1xg976GoKRJtAVZimqr7FK6BEddQSTrCheJLv8zFiKcCRSBC_SSv3LIiaicP7Kknvi0srNRKCl6x8eGz3btVObAPxknW0W3pqqlpzrNLmEFcX5MUA5Xg3YNPBOEUovirf5Xhl969kiqtPGzVr442TP9SeJvxPDDAmucGaD7tQeS3SeaZG5AyXlzDp2U-wodxDT3RiiFFuUAOvZlNm0qjWeAnu7djZ4MInxfLsH2TJ0QMqrcSvyhVHC28gKKrCIrHRm4usPE-z2tW_LFdiheACgpQVVcVk-srMGcx59KcSYtd99DtogS3di_drh1AS05p8XPfqk8lO6j_nHKEbFkrK6hnKQCY11EEFHO7bQUVvQrFbz2fMS-UHxnY5P=w493-h657-no">'),
    dresden = L.marker([51.06, 13.74]).bindPopup('Dresden'),
    prague = L.marker([50.08, 14.4]).bindPopup('<b>Prague</b><br><img width="200px" src="images/prague1.jpg">'),
    munich = L.marker([48.19, 11.56]).bindPopup('<b>Munich</b><br><img width="200px" src="images/munich1.jpg">'),
    vienna = L.marker([48.19, 16.4]).bindPopup('Vienna'),
    venice = L.marker([45.44, 12.33]).bindPopup('Venice'),
    bern = L.marker([46.95, 7.44]).bindPopup('Bern'),
    verona = L.marker([45.43, 10.99]).bindPopup('verona'),
    barcelona = L.marker([41.37, 2.15]).bindPopup('<b>Barcelona</b><br><img width="200px" src="images/Barcelona1.jpg">'),
    madrid = L.marker([40.39, -3.7]).bindPopup('Madrid'),
    nuremburg = L.marker([49.45, 11.08]).bindPopup('Nuremburg'),
    frankfurt = L.marker([50.11, 8.67]).bindPopup('Frankfurt'),
    hamburg = L.marker([53.55, 10.01]).bindPopup('Hamburg'),
    warsaw = L.marker([52.2, 21]).bindPopup('<b>Warsaw</b><br><img width="200px" src="images/warsaw5.jpg">'),
    dusseldorf = L.marker([51.22, 6.78]).bindPopup('Dusseldorf'),
    budapest = L.marker([47.49, 19.04]).bindPopup('Budapest'),
    miskolc = L.marker([48.09, 20.788]).bindPopup('Miskolc'),
    istanbul = L.marker([41.01, 28.96]).bindPopup('Istanbul'),
    athens = L.marker([37.97, 23.7]).bindPopup('Athens'),
    agistri = L.marker([37.7, 23.34]).bindPopup('Agistri'),
    stevenage = L.marker([51.9, -0.263]).bindPopup('Stevenage'),
    bangkok = L.marker([13.72, 100.35]).bindPopup('Bangkok'),
    phuket = L.marker([7.83, 98.4]).bindPopup('Phuket'),
    calgary = L.marker([51, -114]).bindPopup('Calgary'),    
    reddeer = L.marker([52.3, -113.8]).bindPopup('Red Deer'),
    edmonton = L.marker([53.5, -113.5]).bindPopup('Edmonton'),
    vancouver = L.marker([49.2, -123]).bindPopup('Vancouver'),
    kelowna = L.marker([49.9, -119.5]).bindPopup('Kelowna');
    marrakech = L.marker([31.631661, -7.988271]).bindPopup('<b>Marrakech</b><br><img width="200px" src="images/marrakech.jpg">'),
    paris = L.marker([48.858797, 2.356567]).bindPopup('Paris');




    var cities = L.layerGroup([london, brussels, berlin, cologne, amsterdam, pinchercreek, dresden, prague, munich, vienna, venice, bern,
         verona, barcelona, madrid, nuremburg, frankfurt, hamburg, warsaw, dusseldorf, budapest, miskolc, istanbul, athens, agistri, stevenage, 
        bangkok, phuket, calgary, reddeer, edmonton, vancouver, kelowna, marrakech, paris]);
    