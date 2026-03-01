import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.7.1"
const supabaseUrl = 'https://nvulorlksydflyfnkaeb.supabase.co'
const supabaseKey = 'sb_publishable_dgjbhfSmcc-QQa7PMGPiZw_WLFDMTvX'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
    .from('books')
    .select('*')

  for (let book of books) {
    let bookList = document.getElementById('books');
    bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td></tr>`;
  }
} 

getBooks();