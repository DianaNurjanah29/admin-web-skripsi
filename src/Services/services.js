import Http from "../Const/server"

class Services {
    Register(data) {
        return Http.post("users/signup",data)
    }

    Login(data) {
        return Http.post("users/signin",data)
    }

    AddSoal(data) {
        return Http.post("soal/add",data)
    }
    Getstudent(data) {
        return Http.post("soal/get",data)
    }

    Updatestudent(guid, data) {
        return Http.put("soal/update/" + guid, data)
    }

    Deletestudent(guid) {
        return Http.delete("soal/delete/" + guid)
    }

}
export default new Services()