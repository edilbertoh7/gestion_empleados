import Swal from 'sweetalert2';
export const permissionInRole = (permissions, url) => {
    return permissions.includes(url);
}

export const findRole = (auth, role) => {
    return auth.user.roles.some(r => r.name === role);
}

export const switAlert = (tile) => {
    Swal.fire({
        title: tile,
        showClass: {
            popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
        },
        hideClass: {
            popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
        }
    });
}
export const switAlerdelete = (title, url, id, text1,text2) => {
    Swal.fire({
        title: title,
        text: "Esta acción es irreversible",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si eliminar!",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = route(url, { id: id });
            Swal.fire({
                title: "Eliminado!",
                text: text1,
                icon: "success"
            });
        }
        else {
            Swal.fire({
                title: "Cancelado!",
                text: text2,
                icon: "info"
            });
        }
        
    });
}