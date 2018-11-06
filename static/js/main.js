const btnsDelete = document.querySelectorAll('.btn-delete')

if(btnsDelete) {
    const btnArray = Array.from(btnsDelete)
    btnArray.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if(!confirm('Are you sure you want to delete it?')) {
                e.preventDefault()
            }
        })
    })
}