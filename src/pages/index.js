import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="PinduCloud API Platform"
      description="OpenAI 兼容 API 网关">
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.inner}>
            <p className={styles.eyebrow}>OpenAI 兼容 API 网关</p>
            <Heading as="h1" className={styles.title}>
              PinduCloud API Platform
            </Heading>
            <p className={styles.subtitle}>
              使用 OpenAI 风格接口接入多模型 AI 能力，并通过鉴权、计费、限流和错误处理能力支撑生产环境应用。
            </p>
            <div className={styles.actions}>
              <Link className="button button--primary button--lg" to="/docs/intro">
                查看文档
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/quickstart">
                快速开始
              </Link>
            </div>
            <pre className={styles.code}>
              <code>{`curl https://pinducloud.cc/v1/chat/completions \\
  -H "Authorization: Bearer $PINDUCLOUD_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"gpt-5.5","messages":[{"role":"user","content":"Hello"}]}'`}</code>
            </pre>
          </div>
        </section>
      </main>
    </Layout>
  );
}
