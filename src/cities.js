var london = L.marker([51.5, -0.09]).bindPopup('<strong>London<strong><br><img width="200px" src="images/london1.jpg">'),
    brussels = L.marker([50.8, 4.36]).bindPopup('Brussels'),
    berlin = L.marker([52.5, 13.4]).bindPopup('Berlin'),
    cologne = L.marker([50.923, 6.94]).bindPopup('Cologne<br><img width="200px" src="images/dom.jpg">'),
    amsterdam = L.marker([52.3699, 4.8982]).bindPopup('<b>Amsterdam</b><br><img width="200px" src="images/amsterdam (1).jpg">'),
    pinchercreek = L.marker([49.31, -114.41]).bindPopup('<b>Castle Mountain</b><br><img width="200px" src="https://lh3.googleusercontent.com/nYt8bv_sNCc2zVQ3cW_7AN1N_CXfa46uF_CKpa2XnH7PXvu6IUEfh6cJVuDP5nl-UJaOaLbRu7MTDT2k5T2UsUDsHoyt0khy5o6T-H4hntdoeXzhomdxPZ3LN5MlD5THvASzQgAiEK_S7RPVj9joIkMNkaHcgoHXHxusoaWpeUvUOBPfPZs60iuHAkK-fAuJOLpvdjq-7Vau3LnW-_Yjdippzjew_hkPu2YLhV02xx1Tx0guSPXAsG90FVNolel4H3L-T0s1TYSjfTvyIpx60C7QSe3QcJypsODO012VR5npjyaMyasfnm7WTbD_vv1xg976GoKRJtAVZimqr7FK6BEddQSTrCheJLv8zFiKcCRSBC_SSv3LIiaicP7Kknvi0srNRKCl6x8eGz3btVObAPxknW0W3pqqlpzrNLmEFcX5MUA5Xg3YNPBOEUovirf5Xhl969kiqtPGzVr442TP9SeJvxPDDAmucGaD7tQeS3SeaZG5AyXlzDp2U-wodxDT3RiiFFuUAOvZlNm0qjWeAnu7djZ4MInxfLsH2TJ0QMqrcSvyhVHC28gKKrCIrHRm4usPE-z2tW_LFdiheACgpQVVcVk-srMGcx59KcSYtd99DtogS3di_drh1AS05p8XPfqk8lO6j_nHKEbFkrK6hnKQCY11EEFHO7bQUVvQrFbz2fMS-UHxnY5P=w493-h657-no">'),
    dresden = L.marker([51.06, 13.74]).bindPopup('Dresden'),
    prague = L.marker([50.08, 14.4]).bindPopup('<b>Prague</b><br><img width="200px" src="images/prague1.jpg">'),
    munich = L.marker([48.19, 11.56]).bindPopup('<b>Munich</b><br><img width="200px" src="images/munich1.jpg">'),
    innsbruck = L.marker([47.257, 11.4]).bindPopup('Innsbruck'),
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
    stevenage = L.marker([51.9, -0.207109]).bindPopup('Stevenage'),
    bangkok = L.marker([13.72, 100.35]).bindPopup('Bangkok'),
    phuket = L.marker([7.83, 98.4]).bindPopup('Phuket'),
    calgary = L.marker([51, -114]).bindPopup('Calgary'),
    reddeer = L.marker([52.3, -113.8]).bindPopup('Red Deer'),
    edmonton = L.marker([53.5, -113.5]).bindPopup('Edmonton'),
    vancouver = L.marker([49.2, -123]).bindPopup('Vancouver'),
    kelowna = L.marker([49.9, -119.5]).bindPopup('Kelowna'),
    marrakech = L.marker([31.631661, -7.988271]).bindPopup('<b>Marrakech</b><br><img width="200px" src="images/marrakech.jpg">'),
    paris = L.marker([48.858797, 2.356567]).bindPopup('Paris'),
    la = L.marker([34.010944, -118.226074]).bindPopup('Los Angeles'),
    seattle = L.marker([47.573838, -122.301453]).bindPopup('Seattle'),
    cancun = L.marker([21.167619, -86.839474]).bindPopup('Cancun'),
    playa = L.marker([20.626393, -87.076057]).bindPopup('Playa del Carmen'),
    miami = L.marker([25.77372, -80.203079]).bindPopup('Miami'),
    tampa = L.marker([27.945098, -82.43042]).bindPopup('Tampa'),
    houston = L.marker([29.746948, -95.347595]).bindPopup('Houston'),
    phoenix = L.marker([33.44644, -112.065765]).bindPopup('Phoenix'),
    toronto = L.marker([43.662465, -79.394348]).bindPopup('Toronto'),
    ottawa = L.marker([45.373425, -75.682617]).bindPopup('Ottawa'),
    montreal = L.marker([45.518102, -73.557584]).bindPopup('Montreal'),
    quebec = L.marker([46.660149, -71.2771]).bindPopup('Quebec'),
    halifax = L.marker([44.650613, -63.57843]).bindPopup('Halifax'),
    charlottetown = L.marker([46.239927, -63.132248]).bindPopup('Charlottetown'),
    orlando = L.marker([28.554882, -81.373123]).bindPopup('Orlando'),
    regina = L.marker([50.44135, -104.585449]).bindPopup('Regina'),
    winnipeg = L.marker([49.873733, -97.1521]).bindPopup('Winnipeg'),
    saskatoon = L.marker([52.140902, -106.670105]).bindPopup('Saskatoon'),
    thunderBay = L.marker([48.403139, -89.245926]).bindPopup('Thunder Bay'),
    lasVegas = L.marker([36.165237, -115.146263]).bindPopup('Las Vegas'),
    keyWest = L.marker([24.555204, -81.78039]).bindPopup('Key West'),
    grandeprairie = L.marker([55.16025, -118.789261]).bindPopup('Grande Prairie'),
    fortmcmurray = L.marker([56.724629, -111.376648]).bindPopup('Fort McMurray'),
    //deggendorf = L.marker([48.832922, 12.962648]).bindPopup('Deggendorf: My current location');
    regensburg = L.marker([49.009445, 12.10041]).bindPopup('Regensburg'),
    stuttgart = L.marker([48.78289, 9.183369]).bindPopup('Stuttgart'),
    passau = L.marker([48.572026,13.456707]).bindPopup('Passau'),
    lisbon = L.marker([38.709389, -9.136376]).bindPopup('<b>Lisbon</b><br><img width="200px" src="images/lisbon.jpg">'),
    porto = L.marker([41.148899, -8.607273]).bindPopup('<b>Porto</b><br><img width="200px" src="images/porto.jpg">');
    freiburg = L.marker([47.987302, 7.853851]).bindPopup('<b>Freiburg</b><br><img width="200px" src="images/freiburg.jpg">');
    strasbourg = L.marker([48.581247, 7.744675]).bindPopup('<b>Strasbourg</b><br><img width="200px" src="images/strasbourg.jpg">');
    heidelberg = L.marker([49.410113, 8.685379]).bindPopup('<b>Heidelberg</b><br><img width="200px" src="images/heidelberg.jpg">');
    göttingen = L.marker([51.535797, 9.93413]).bindPopup('<b>Göttingen</b><br><img width="200px" src="images/göttingen.jpg">');
    tettenborn = L.marker([51.563954, 10.551832]).bindPopup('<b>Tettenborn</b><br><img width="200px" src="images/tettenborn.jpg">');
    leipzig = L.marker([51.341781, 12.375455]).bindPopup('Leipzig');
    salzburg = L.marker([47.802502, 13.029613]).bindPopup('Salzburg');
    hallstatt = L.marker([47.55442, 13.644247]).bindPopup('Hallstatt');
    königsee = L.marker([47.590206, 12.989016]).bindPopup('Königsee');












var cities = L.layerGroup([london, brussels, berlin, cologne, amsterdam, pinchercreek, dresden, prague, munich, innsbruck, venice, bern,
    verona, barcelona, madrid, nuremburg, frankfurt, hamburg, warsaw, dusseldorf, budapest, miskolc, istanbul, athens, agistri, stevenage,
    bangkok, phuket, calgary, grandeprairie, fortmcmurray, regensburg, stuttgart, passau, lisbon, porto, freiburg, strasbourg, heidelberg, göttingen,
    tettenborn,leipzig,salzburg,hallstatt,königsee,
    //deggendorf,
     reddeer, edmonton, vancouver, kelowna, marrakech, paris, la, seattle, cancun, playa, miami, tampa, houston, phoenix, toronto,
    ottawa, montreal, quebec, halifax, charlottetown, orlando, regina, winnipeg, saskatoon, thunderBay, lasVegas, keyWest
]);