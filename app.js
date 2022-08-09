class book{
   constructor(title,author,isbn){
      this.title = title;
      this.author = author;
      this.isbn = isbn;
   }

   
}

class UI{
   addBookToList(book) {
      const list = document.getElementById('book-list');
      const row = document.createElement('tr');
      //   console.log(book.isbn);
      row.innerHTML = `
         <td>${book.title}</td>
         <td>${book.author}</td>
         <td>${book.isbn}</td>
         <td><a href="#" class="delete">X<a></td>`;
         
         list.appendChild(row);
      }
      //show alert function
   showAlert(msg,className){
      const card = document.querySelector('.container');
      const form = document.querySelector('#book-form');
   
      //create new div
      const newDiv = document.createElement('div');
      newDiv.className = ` alert ${className}`;
      newDiv.appendChild(document.createTextNode(msg));
      card.insertBefore(newDiv,form);

      setTimeout(function(){
         document.querySelector('.alert').remove();
      },3000)
   }
   
      //clear fields
   clearFields(){
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
      document.getElementById('isbn').value = '';
   }

   deleteBook(target) {
      target.parentElement.parentElement.remove();
   }

}

//event listeners
document.getElementById('book-form').addEventListener('submit',function(e){
   //get form values
   const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;
          
   //instantiate book object
   const ob = new book(title,author,isbn);
   //instantiate UI object
   const ui = new UI();

   //validation 
   if(title === '' || author === '' || isbn === '') {
      //error alert
      ui.showAlert(`Please fill all the fields`,'error');
      ui.clearFields();
   }else {
      //success alert
      ui.addBookToList(ob);
      ui.showAlert(`Book Added`,`success`);
      ui.clearFields();
   }
  
   e.preventDefault();
});
 
//delete book
document.querySelector('#book-list').addEventListener('click',function(e){
   if(e.target.className === 'delete'){
      const ui = new UI();
      ui.deleteBook(e.target);
      ui.showAlert(`Book Deleted`, 'error');
   }

   e.preventDefault();
});