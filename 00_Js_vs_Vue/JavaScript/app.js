// Html etiketlerinin id değerleri ile alınması
const todoText = document.querySelector('#todoText');
const addButton = document.querySelector('#addButton');
const todoList = document.querySelector('#todoList');

// Buton için event tanımlaması ve tıklanma durumu için atanan arrow func
addButton.addEventListener("click", () => {
    // Tıklandığında li etiketi oluşturacak
    const listItem = document.createElement("li");
    // <li> etiketleri içeriğini input alanı değeri olarak atanması
    listItem.textContent = todoText.value;
    // <li> etiketlerinin <ul> etikleri arasına eklenmesi
    todoList.append(listItem);
});