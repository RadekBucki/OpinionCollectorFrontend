export class SweetAlert {
    static error(swal, message: string): object {
        return swal({
            title: "Error",
            text: message,
            icon: "error",
        })
    }

    static success(swal, message: string): object {
        return swal({
            title: "Success",
            text: message,
            icon: "success",
        })
    }
}