export class SweetAlert {
    static error(swal, message: string): object {
        return swal({
            title: "Error",
            text: message,
            icon: "error",
        })
    }
}