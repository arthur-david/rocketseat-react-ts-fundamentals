import { Header } from "./components/Header/Header";
import { Post, PostType } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts: PostType[] = [
    {
        id: 1,
        author: {
            url: 'https://github.com/arthur-david.png',
            name: 'Arthur Rodrigues',
            role: 'Software Engineer @Somapay'
        },
        content: [
            {type: 'paragraph', content: 'Fala galeraa 👋'},
            {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            {type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2024-10-14 18:43:16'),
    },
    {
        id: 2,
        author: {
            url: 'https://github.com/diego3g.png',
            name: 'Diego Fernandes',
            role: 'CTO @Rocketseat'
        },
        content: [
            {type: 'paragraph', content: 'Fala galeraa 👋'},
            {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

            {type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2024-10-06 12:46:23'),
    }
]

export function App() {
    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />

                <main>
                    {posts.map(post => {
                        return (
                            <Post
                                key={post.id}
                                post={post}
                            />
                        )
                    })}
                </main>
            </div>
        </div>
    );
}
