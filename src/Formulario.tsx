// src/Formulario.tsx
function Formulario() {
  return (
    <form>
      <div>
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome" required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" required></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;