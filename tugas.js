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
        // Membuat table row
        var tr = document.createElement('tr');

        // Membuat table data tugas
        var tdTugas = document.createElement('td');
        // Menambah atribut class pada table data tugas
        tdTugas.setAttribute('class', 'tugas');
        // Memasukkan value nama tugas ke table data tugas
        tdTugas.appendChild(document.createTextNode(namaTugas));
        
        // Membuat table data hapus
        var tdHapus = document.createElement('td');
        // Membuat tombol hapus
        var hapus = document.createElement('button');
        // Menambah atribut class pada tombol hapus
        hapus.setAttribute('class', 'hapus-btn');
        // Menambah icon ceklis pada tombol hapus
        hapus.appendChild(document.createTextNode('✔'));
        // Memasukkan tombol hapus ke table data hapus
        tdHapus.appendChild(hapus);

        // Memasukkan 2 table data ke dalam table row
        tr.appendChild(tdTugas);
        tr.appendChild(tdHapus);
    
        // Memasukkan table row baru ke table daftar tugas
        daftarTugas.appendChild(tr);
    
        console.log('Berhasil menambah tugas: ' + namaTugas);
    }

}

function hapusTugas(e){
    // Jika target yang diklik adalah elemen dengan class hapus-btn, maka jalankan kode
    if(e.target.classList.contains('hapus-btn')){
        // Konfirmasi sebelum menghapus
        if(confirm('Yakin tugas sudah selesai?')){
            // Membuat variabel element grandparent (parent dari parent) dari class hapus-btn
            var tr = e.target.parentElement.parentElement;
            // Menghapus parent dari class hapus-btn, yaitu <li>
            daftarTugas.removeChild(tr);
            
            console.log('Berhasil menghapus tugas: ' + tr.children[0].textContent);
        }
    }
}