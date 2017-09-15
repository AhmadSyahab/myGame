TENTUKAN 'game' dengan kata yang ingin di mainkan
UBAH 'game' ke bentuk array dengan fungsi 'convertArray'
UBAH 'convertArray' array menjadi blank array yang baru dengan fungsi 'convertBlank' 
MASUKAN 'input' untuk menebak huruf di dalam kata dengan fungsi 'insertWord'
FOR setiap pertambahan satu pada 'index1' sampai panjang kata 'convertArray':
	IF 'convertArray[index]' sama dengan 'input':
		PINDAHKAN 'input' ke dalam 'convertBlank[index]'
	ENDIF
ENDFOR
TAMPILKAN 'convertBlank' 
IF 'convertBlank.join()' sama dengan 'convertArray.join()':
	TULISKAN 'Game Over'
ELSE :
	MASUKAN 'newWord' untuk menebak huruf lain di dalam kata dengan fungsi 'insertWord'
	ULANGI SAMPAI TRUE
ENDIF

