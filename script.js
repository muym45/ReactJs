// Ambil elemen HTML
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

// Event listener untuk tombol 'Add'
addTodoBtn.addEventListener('click', () => {
    const todoText = todoInput.value.trim();

    // Cek jika input tidak kosong
    if (todoText !== "") {
        // Buat elemen baru untuk to-do
        const listItem = document.createElement('li');
        listItem.className = 'todo-item';
        listItem.textContent = todoText;

        // Buat tombol hapus
        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';

        // Tambahkan event listener untuk tombol hapus
        deleteBtn.addEventListener('click', () => {
            todoList.removeChild(listItem);
        });

        // Tambahkan tombol hapus ke list item
        listItem.appendChild(deleteBtn);

        // Tambahkan list item ke ul
        todoList.appendChild(listItem);

        // Kosongkan input setelah menambahkan
        todoInput.value = "";
    }
});
