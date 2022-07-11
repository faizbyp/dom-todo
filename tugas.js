var form = document.getElementById('tambahtugas');
var daftarTugas = document.getElementById('daftartugas');

// Menambah tugas (event submit form)
form.addEventListener('submit', tambahTugas);
// Menghapus tugas (klik tombol hapus)
// Elemen yang di-select adalah seluruh daftar tugas
daftarTugas.addEventListener('click', hapusTugas);


function tambahTugas(e){
    // Mencegah form melakukan submit (get/post)
    e.preventDefault();
    
    // Ambil value input
    var namaTugas = document.getElementById('judultugas').value;

    if(namaTugas === ''){
        alert('Nama tugas tidak boleh kosong');
    }
    else{
        // Membuat <li>
        var li = document.createElement('li');
        // Menambah atribut class pada <li>
        li.setAttribute('class', 'tugas');
        // Memasukkan value nama tugas ke <li>
        li.appendChild(document.createTextNode(namaTugas));
        
        // Membuat tombol hapus
        var hapus = document.createElement('button');
        // Menambah atribut class pada tombol hapus
        hapus.setAttribute('class', 'hapus-btn');
        // Menambah icon ceklis pada tombol hapus
        hapus.appendChild(document.createTextNode('✔'));
        
        // Memasukkan tombol hapus ke <li>
        li.appendChild(hapus);
    
        // Memasukkan <li> baru ke <ul> daftar tugas
        daftarTugas.appendChild(li);
    
        console.log('Berhasil menambah tugas: ' + namaTugas);
    }

}

function hapusTugas(e){
    // Jika target yang diklik adalah elemen dengan class hapus-btn, maka ...
    if(e.target.classList.contains('hapus-btn')){
        // Konfirmasi sebelum menghapus
        if(confirm('Yakin tugas sudah selesai?')){
            // Membuat variabel element parent dari class hapus-btn
            var li = e.target.parentElement;
            // Menghapus parent dari class hapus-btn, yaitu <li>
            daftarTugas.removeChild(li);
            
            console.log('Berhasil menghapus tugas: ' + li.textContent);
        }
    }
}