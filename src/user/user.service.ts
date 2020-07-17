import { Injectable } from "@nestjs/common"
import { User } from "./user.interface"

@Injectable()

export class UserService {
    // 声明users 数组
    private readonly users: Array<User> = []

    // 查询是否含有这个用户
    QueryUserId(user: User) {
        let has = this.users.some((i)=>{
            return i.id = user.id
        })
        if(has) {
            return '找到啦'
        } else {
            return '没有找到哦'
        }
    }

    // 查询所有用户信息
    QueryUserList() :Array<User>{
        return this.users
    }

    // 添加用户信息
    AddUserInfo(user: User) {
        this.users.push(user)
        return '添加成功'
    }

    // 删除用户信息
    DeleteUserInfo(user: User) {
        if (this.users.find(element => element.id === user.id)) {
            return '找到了！ 没有删除'
        } else {
            return '没有找到哦'
        }
    }

    ClearUserInfo() {
        // this.users  = []
        return '清除成功'
    }
}

