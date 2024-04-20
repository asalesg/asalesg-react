import styles from "./Projetos.module.css";

import PostModelo from "componentes/PostModelo";
import BotaoReact from "assets/botaoReactTypeScript.png"
import BuscaHub from "assets/buscahub.png"
import JogoVoz from "assets/jogoAdivinhaVoz.png"

export default function Projetos() {
    return (
        <PostModelo>
            <h3 className={styles.subtitulo}>
                Aqui pode ver alguns dos meus projetos pessoais em produção.
            </h3>

            <img
                src={BotaoReact}
                alt="imagem do site realizado do botao"
                className={styles.projetos}
            />
            <h3 className={styles.subtitulo}>
            Botão para Feedback em React
            </h3>
            <p className={styles.paragrafo}>
            Essa foi uma aplicação completa criada durante um NLW da RocketSeat. Foi meu primeiro contato com TypeScript e React. Infelizmente o servidor ficou gratuito por apenas um ano e não recebo mais, porém o front-end continua funcionando.</p>
            <br></br>
            <br></br>
            <br></br>
            <img
                src={BuscaHub}
                alt="Imagem do site do projeto buscahub"
                className={styles.projetos}
            />
            <h3 className={styles.subtitulo}>
                Buscahub em Svelte.
            </h3>
            <p className={styles.paragrafo}>
            Site para conhecer a aprender um pouco sobre o framework Svelte. Ele foi totalmente criado em Svelte e busca por um perfil no GitHub. Ele traz algumas informações adicionais.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <img
                src={JogoVoz}
                alt="imagem do site feito em javascript puro"
                className={styles.projetos}
            />
            <h3 className={styles.subtitulo}>
                Adivinha o número pela voz!
            </h3>
            <p className={styles.paragrafo}>
            Site criado para praticar minhas habilidades com JavaScript Vanilla. É necessário habilitar o microfone para aproveitar a experiência totalmente.
            </p>
            <br></br>
            <br></br>
            <br></br>

            </PostModelo>
    )
}