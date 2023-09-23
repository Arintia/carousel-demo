// Öncelikle DOM üzerinde oynama yapacağımız elemanlarımızı seçiyoruz.
const rightBtn = document.getElementById("right-arrow");
const leftBtn = document.getElementById("left-arrow");
const images = document.getElementsByClassName("item");
const circles = document.getElementsByClassName("circle");

let activeImage = document.getElementsByClassName("active")[0];
let activeCircle = document.getElementsByClassName("circle-active")[0];

// Seçili fotoğrafın indeksini tutacak bir değişken tanımlıyoruz.
let currentIndex = 0;
/* 
    images değişkenimizden gelen array'in büyüklüğü ile bir maksimum indeks değeri tanımlıyoruz.
    Bu değişkeni indeksimizin var olan fotoğraf sayısından fazla olmasını engellemek için kullanacağız. 
*/
const MAX_INDEX = images.length;

/*
    Bu fonksiyonumuzda mevcut aktif fotoğraftan ve daireden classları silip yeni aktif fotoğrafı tanımlıyoruz ve gerekli classlarımızı ekliyoruz.
*/
const renderItem = () => {
    activeImage.classList.remove("active");
    activeImage = images[currentIndex];
    activeImage.classList.add("active");
    activeCircle.classList.remove("circle-active");
    activeCircle = circles[currentIndex];
    activeCircle.classList.add("circle-active");
}

/*
    Bu fonksiyonumuzda indeksi 1 arttırdığımızda maksimum indeks değerine gelip gelmediğimizi kontrol ediyoruz.
    Eğer gelmediysek indeksimize 1 ekliyoruz, geldiysek başa dönerek 0 tanımlıyoruz. Sonrasındaysa bu fotoğrafın
    renderlanması görevini başka bir fonksiyona devrediyoruz.
*/
const getNextItem = () => {
    if(currentIndex + 1 < MAX_INDEX) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    renderItem();
}

/*
    Bu fonksiyonumuzda indeksi 1 azalttığımızda 0'dan az olup olmadığını kontrol ediyoruz.
    Eğer az değilse indeksimizden 1 çıkarıyoruz, fakat eğer azsa sona dönerek indeksin maksimum değerinden 1 az olacak şekilde tanımlıyoruz. Sonrasındaysa bu fotoğrafın
    renderlanması görevini başka bir fonksiyona devrediyoruz.
*/
const getPreviousItem = () => {
    if(currentIndex - 1 >= 0) {
        currentIndex--;
    } else {
        currentIndex = MAX_INDEX - 1;
    }
    renderItem();
}

// Son olarak bu fonksiyonların çalışması için gerekli eventlerimizi tanımlıyoruz.
leftBtn.addEventListener("click", getPreviousItem);
rightBtn.addEventListener("click", getNextItem);