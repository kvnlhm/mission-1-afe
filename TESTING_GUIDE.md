# Testing Script untuk Aplikasi ReactJS CRUD

## Script Testing Manual

### 1. Persiapan Testing
```bash
# Buka aplikasi
npm start

# Buka browser ke
http://localhost:3000/crud
```

### 2. Test Cases

#### Test Case 1: Load Data (GET)
**Expected**: Data dari MockAPI muncul di tabel
```javascript
// Buka Console (F12) dan cek log:
// "API Request: GET /courses"
// "API Response: 200 /courses"
```

#### Test Case 2: Add Data (POST)
**Steps**:
1. Klik "+ Tambah Kursus"
2. Isi form:
   - Judul: "Testing Course"
   - Deskripsi: "Course untuk testing"
   - Instruktur: "Test Instructor"
   - Jabatan: "Test Developer"
   - Rating: 4.5
   - Harga: "Rp 100K"
   - Image: "https://via.placeholder.com/300x200"
   - Instructor Image: "https://via.placeholder.com/100x100"
3. Klik "Simpan"

**Expected**:
- Loading state muncul
- Data baru muncul di tabel
- Console log: "API Request: POST /courses"

#### Test Case 3: Update Data (PUT)
**Steps**:
1. Klik "Edit" pada data yang baru dibuat
2. Ubah judul menjadi "Updated Testing Course"
3. Klik "Update"

**Expected**:
- Data terupdate di tabel
- Console log: "API Request: PUT /courses/[id]"

#### Test Case 4: Delete Data (DELETE)
**Steps**:
1. Klik "Hapus" pada data
2. Konfirmasi dialog

**Expected**:
- Data terhapus dari tabel
- Console log: "API Request: DELETE /courses/[id]"

### 3. Network Testing
Buka DevTools > Network tab:

**GET Request**:
- Method: GET
- URL: [MockAPI-URL]/courses
- Status: 200

**POST Request**:
- Method: POST
- URL: [MockAPI-URL]/courses
- Status: 201

**PUT Request**:
- Method: PUT
- URL: [MockAPI-URL]/courses/[id]
- Status: 200

**DELETE Request**:
- Method: DELETE
- URL: [MockAPI-URL]/courses/[id]
- Status: 200

### 4. Error Handling Testing

#### Test Network Error
1. Matikan koneksi internet
2. Coba tambah data
3. Expected: Error message muncul

#### Test Empty State
1. Hapus semua data
2. Refresh halaman
3. Expected: "Tidak ada data kursus"

### 5. Performance Testing
- Loading state muncul saat API call
- UI responsive saat loading
- Statistics update otomatis

### 6. Success Criteria Checklist
- [ ] GET data berhasil
- [ ] POST data berhasil  
- [ ] PUT data berhasil
- [ ] DELETE data berhasil
- [ ] Loading state berfungsi
- [ ] Error handling berfungsi
- [ ] Statistics update otomatis
- [ ] UI responsive

### 7. Debug Commands
```javascript
// Di console browser:
localStorage.clear() // Clear cache
location.reload() // Refresh page
```

### 8. Common Issues & Solutions

#### CORS Error
**Problem**: Access blocked by CORS policy
**Solution**: Pastikan URL di .env benar

#### 404 Error  
**Problem**: API endpoint not found
**Solution**: Cek MockAPI project dan resource name

#### 500 Error
**Problem**: Server error
**Solution**: Cek schema di MockAPI

### 9. Final Verification
Setelah semua test selesai, aplikasi harus:
1. Terhubung ke MockAPI
2. Semua CRUD operations berfungsi
3. Loading dan error states berfungsi
4. UI responsive dan user-friendly
