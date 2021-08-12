import { Body, Controller, Delete, Get, Header, HttpCode, Param, Post, Put, Query } from "@nestjs/common";

@Controller('teste')
export class TesteController {

    @Get()
    @HttpCode(200)
    testeEndpoint(): string {
        return "Testando endpoint GET...";
    }

    @Get(':id')
    @HttpCode(200)
    testePath(@Param('id') id): string {
        return `Testando endpoint GET com path: ${id}...`;
    }

    @Get()
    @HttpCode(200)
    testeQuery(@Query('nome') nome, @Query('sobrenome') sobrenome): string {
        console.log("nome: ", nome);
        console.log("sobrenome: ", sobrenome);
        return "Testando endpoint GET com query..."; 
    }

    @Post()
    @HttpCode(201)
    @Header('Cache-Control', 'none')
    testePost(@Body() body): void {
        console.log("body: ", body);
    }

    @Put()
    @HttpCode(201)
    @Header('Cache-Control', 'none')
    testePut(@Body() body): void {
        console.log('body: ', body);
    }

    @Delete(':id')
    @HttpCode(204)
    testeDelete(@Param() params): void {
        console.log(`Testando endpoint GET com path: ${params.id}...`)
    }

}