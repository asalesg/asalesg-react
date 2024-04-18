import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o André!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do André sorrindo em preto e branco tomando um café"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou desenvolvedor FullStack na Softtek e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
            💻Viciado em explorar as maravilhas do mundo digital, passei incontáveis horas mergulhando em games e descobrindo os mais recentes avanços tecnológicos.
            </p>
            <p className={styles.paragrafo}>
            🚶Quando não estou imerso em linhas de código ou desbravando novas fronteiras da tecnologia, você pode me encontrar desfrutando de longas caminhadas ou pedalando pela selva de pedra, uma paixão que compartilho com meu amor por andar de bike.
            </p>
            <p className={styles.paragrafo}>
            ☕️Adoro começar meu dia com uma boa xícara de café, que me dá energia para mergulhar em projetos criativos e desafios do dia a dia.
            </p>
            <p className={styles.paragrafo}>
            🎮Nas horas de lazer, sou um devoto das séries e filmes, sempre em busca da próxima grande história para me cativar.

            </p>
            <p className={styles.paragrafo}>
            🐱Por último, mas não menos importante, tenho um amor incondicional pelos meus gatos, que trazem alegria e companheirismo à minha vida diária.
Estou sempre aberto a novas conexões e oportunidades emocionantes, então não hesite em entrar em contato!
            </p>
            <h3 className={styles.subtitulo}>Habilidades refletem nosso conhecimento</h3>
<p className={styles.paragrafo}>🔹Psicólogo formado pelo Mackenzie e Analista do Comportamento pela USP, com graduação em Análise e Desenvolvimento de Sistemas pela FIAP.</p>
<p className={styles.paragrafo}>🔹Experiência diversificada que combina habilidades técnicas em desenvolvimento de software com insights em comportamento humano.</p>
<p className={styles.paragrafo}>🔹Iniciei minha jornada como estagiário, onde desempenhei funções de suporte, análise de dados com Python e manutenção de API em C#.</p>
<p className={styles.paragrafo}>🔹Ao longo da minha carreira, avancei para o cargo de Jr, concentrando-me em automações com Power Automate, desenvolvimento de formulários em ASP.NET e JavaScript, bem como na criação de sistemas e melhorias em C# utilizando .NET.</p>
<p className={styles.paragrafo}>🔹Comprometido com o aprendizado contínuo, estou sempre buscando atualizações e aperfeiçoamentos através de cursos na Alura, Udemy e OneBitCode.</p>

<p className={styles.paragrafo}>Estou procurando oportunidades que me permitam aplicar essas habilidades em contextos de tecnologia inovadores e desafiadores. Obrigado pela consideração e estou empolgado para a oportunidade de discutir como minhas habilidades podem contribuir para a sua empresa.</p>
        </PostModelo>
    )
}