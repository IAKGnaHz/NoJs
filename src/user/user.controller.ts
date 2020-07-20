import { Controller, Get, Post, Body, HttpException, HttpStatus, UseFilters} from "@nestjs/common"
import { ForbiddenException } from './../error/forbidden.exception'
import { UserService } from './user.service'
import { UserDot } from './creat-user.dto'
import { User } from './user.interface'
import { HttpExceptionFilter } from './../error/http-exception.filter'

@Controller('user')

export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('error')
    async getError() {
        throw new HttpException('403 Not Forbidden',HttpStatus.FORBIDDEN)
    }

    @Get('forbidden') 
    async getForbidden() {
        throw new ForbiddenException()
    }

    @Post('add')
    async addUserInfo(@Body() userDot: UserDot) {
        this.userService.AddUserInfo(userDot);
    }

    @Post('customHttp')
    @UseFilters(new HttpExceptionFilter)
    async customHttp(@Body() userDot: UserDot) {
        throw new ForbiddenException()
    }

    @Get('query')
    async queryUserList(): Promise<Array<User>> {
        return this.userService.QueryUserList()
    }

    @Post('delete')
    delete(@Body() userDot: UserDot): string {
        return this.userService.DeleteUserInfo(userDot)
    }

    @Post('clear')
    clearUser(): string {
        return this.userService.ClearUserInfo()
    }
}