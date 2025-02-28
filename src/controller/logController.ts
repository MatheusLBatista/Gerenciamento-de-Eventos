import dbPromise from "..";

// Função para listar logs
export async function listarLogs() {
    const db = await dbPromise;
    const logs = await db.all("SELECT * FROM logs");
    console.log("\n📜 Lista de Logs:");
    logs.forEach(log =>
        console.log(`ID: ${log.id} | Ação: ${log.acao} | Tabela: ${log.tabela} | Usuário: ${log.usuario_id} | Data: ${log.data_hora.toString()}`)
    );
}