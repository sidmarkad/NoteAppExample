
showNotes();

//Adding Notes to local storage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let noteTxt = document.getElementById('noteTxt');
    let notes = localStorage.getItem('note');
    if (notes == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(notes);
    }

    noteObj.push(noteTxt.value);
    localStorage.setItem("note", JSON.stringify(noteObj));
    noteTxt.value = "";
    showNotes();
});

// Showing Notes from local storage

function showNotes() {
    let notes = localStorage.getItem('note');
    if (notes == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(notes);
    }

    let html = "";
    noteObj.forEach(function (element, index) {
        html += `
        <div class="card noteCard my-2 mx-2" id="noteCard" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button onclick="deleteNote(this.id)" id="${index}" class="btn btn-primary">Delete Note</button>
            </div>
        </div>
        `;
    });

    let noteElem = document.getElementById('notes');
    if (noteObj.length != 0) {
        noteElem.innerHTML = html;
    } else {
        noteElem.innerHTML = "Nothing To show";
    }
}

// Function to delete Note
function deleteNote(index) {
    let notes = localStorage.getItem('note');
    if (notes == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(notes);
    }

    noteObj.splice(index, 1);
    localStorage.setItem('note', JSON.stringify(noteObj))
    showNotes();
}

// Searching Notes
let searchTxt = document.getElementById('searchTxt');
searchTxt.addEventListener('input', function (element) {
    let inputVal = searchTxt.value.toLowerCase();
    let noteCard = document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerHTML;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })
})


/*
    Furthur features:
    1. Add Title- instead of showing note1, note2...
    2. Mark Note as important.
    3. Separate Notes by user
    4. Sync and host to the web server 
 */

