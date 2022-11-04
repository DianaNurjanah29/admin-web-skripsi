import swal from 'sweetalert';
class SweetAlert {

    Succes(data) {
        swal({
            title: "Selamat",
            text: data,
            icon: "success",
            button: true,
            timer: 10000,
        });
    }
    welcome(data) {
        swal({
            title: "Selamat Datang",
            text: data,
            icon: "success",
            button: true,
            timer: 10000,
        });
    }

    Error(data) {
        swal({
            title: "Mohon Maaf",
            text:data,
            icon: "error",
            button: true,
        });

    }
    Exit() {
        swal({
            title: "Apakah Anda Yakin?",
            text: "Ingin Keluar Dari Sistem !",
            icon: "warning",
            dangerMode: true,
        })
    }

    Warning(data) {
        swal({
            title: "Mohon Maaf",
            text:data,
            icon: "warning",
            button: true,
        });

    }


}
export default new SweetAlert();