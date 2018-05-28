const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//buat Schema pada model desa ini
const DesaSchema = new Schema({
  kode_desa: {
    type:String,
    required:[true,'Kode harus diisi']
  },
  nama_desa:{
    type:String,
    required:[true,'Nama desa harus diisi']
  },
  alamat_kantor:{
    type:String
  },
  telp_kantor:{
    type:String
  },
  jumlah_penduduk:{
    type:[Number],
    default:0
  }
});

const Desa = mongoose.model('desa',DesaSchema);

module.exports = Desa;
