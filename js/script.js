//7. stosujemy flagę, pomagają nam określić czy ma mieć miejsce dane zdarzenie czy nie, 
//ustawiamy na false, ponieważ chcemy aby domyślnie utsawiało się żby samo wjechanie nie 
//pozwalało nam rysować. Jeżeli zmienna active jest true, to wtedy wywoła się funkcja draw
let active = false;

//2. Towrzymy zmienną draw do której jest przypisana anonimowa funkcja z parametrem (e). 
//Określamy w niej ciało funkcji	. 
const draw = function(e) {
	//8. nasza flaga, czyli jeśli active jest równy fals, to wejdź w blok kodu i 
	//dzieki return zakończ funkcje i nic nie rysuje na documnecie. Jeżeli zmienna active
	//jest true, to wtedy wywoła się ciało funkcji
	if(active == false) return;

	//2.sprawdzamy czy wyswietlają się współrzędne kliknięcia
	//console.log(e.clientX, e.clientY); 

	//3. tworzymy zmienne współrzędnych x i y
	const x = e.clientX;
	const y = e.clientY;

	//4. tworzymy element div (możesz span albo h1) na stronie document 
	//któremu nadamy takie parametry gdzie ma się znajdować, ale jeszcze 
	//nie jest przypisany do Document Object Model, czyli do naszej białej planszy
	const div = document.createElement("div");

	//5. //poprzez odwołanie się do obiektu style utworzonego diva, który przechowuje 
	//różne właściwości, takie małe kiesoznki informacjami np. color, background-color, font-size.0
	//Nas interesuje właściwiośc top (właściwości to już musi być równość). Sam x bedzie typem number, 
	//więc trzeba dodac procenty albo px, my dodajemy pixele "px", czyli typ stringa. 
	//Chcemy wstawić te elementy x i y dokładnie w tym miejscu gdzie klikneliśmy.
	div.style.top = y + "px";
	div.style.left = x + "px";

	//6. ddodajemy div za każdym razem kiedy klikniemy i dodaje się tam gdzie chcemy
	document.body.appendChild(div);
}

//10. Tworzenie funkcji draActive dla zdarzeń mousedown i mouseup - składowe clicka
const drawActive = function() {
	//. 11 Stosowanie operatora negacji logicznej powoduje, że za każdym razem 
	//zmienia wartość wywołanej funckji, czyli odwraca false na true, true na false
	//jeżeli mousedown to zmieni false na true, mouseup true na false
	active = !active
}

//1.nasłuchujemy na całym dokumencie body zdarzenia ruszania myszką mousemove lub kliknięcie click, 
//które wywoła funkcje draw.
//Tutaj bez bezpośredniego wywołania funkcji, bo nie chcemy jej teraz wywołać, a dopiero wtedy kiedy
//zdarzy się mousemove lub click. Jeszcze ta funkcja nie jest zadeklarowana.
//jeżeli kliknie lub poruszamy się myszą po dokumencie, to za każdym razem wywołania jakiegos zdarzenia, 
//przekazywany jest do tej funkcji, za każdym razem, obiekt z informajcją o tym kliknięciu (zdarzeniu). 
//Jeżeli chcemy skorzystac z informacji o tym obiekcie np. gdzie został klikniety na stronie, 
//to musi do tej naszej funkcji przekazać do środka choć jeden parametr (e) lub (event) lub (inna nazwa). 
//To słowo kluczowe będzie nazwą zmiennej przechowującą ten obiekt w środku funkcji i taam będziemy 
//mogli się odwołać do tej zmiennej
document.body.addEventListener("mousemove", draw);

//9. tworzymy następne zdarzenie do nasłuchiwania momentu kliknięcia rysowania mousedown 
//i momentu puszczenia myszki rysowania mouseup
document.body.addEventListener("mousedown", drawActive);
document.body.addEventListener("mouseup", drawActive);