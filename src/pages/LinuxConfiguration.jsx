import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Description from "./components/Description";
import Title from "./components/Title";
import CodeBlock from "./components/CodeBlock";

export default function LinuxConfiguration() {
    return (
        <Container>
            <div className="text-light my-3">
                <div className="mb-4">
                    <Title title={"Linux Configuration"} />

                    <Description
                        description={
                            "Within the organization we share a custom configuration for our environment configuration (Debian 12). We share it here as a guide."
                        }
                    />
                </div>

                <Fragment>
                    <div className="mb-3">
                        <a
                            href="https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH#ubuntu-debian--derivatives-windows-10-wsl--native-linux-kernel-with-windows-10-build-1903"
                            className="text-lion-orange text-decoration-none"
                            target="_blank"
                        >
                            ZSH
                        </a>
                    </div>

                    <CodeBlock language={"bash"} content={"sudo apt install zsh"} />
                </Fragment>

                <Fragment>
                    <div className="mb-3">
                        <a
                            href="https://ohmyz.sh/#install"
                            className="text-lion-orange text-decoration-none"
                            target="_blank"
                        >
                            Oh My ZSH - Install with wget
                        </a>
                    </div>

                    <CodeBlock
                        language={"bash"}
                        content={
                            'sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"'
                        }
                    />
                </Fragment>

                <Fragment>
                    <div className="mb-3">
                        <a
                            href="https://github.com/Yash-Handa/logo-ls/releases"
                            className="text-lion-orange text-decoration-none"
                            target="_blank"
                        >
                            Logo-ls
                        </a>
                    </div>

                    <CodeBlock
                        language={"bash"}
                        content={"sudo apt install golang-go -y"}
                    />

                    <CodeBlock
                        language={"bash"}
                        content={"sudo apt-get install ./logo-ls_amd64.deb"}
                    />

                    <CodeBlock
                        language={"bash"}
                        content={
                            "curl https://raw.githubusercontent.com/UTFeight/logo-ls-modernized/master/INSTALL | bash"
                        }
                    />
                </Fragment>
            </div>
        </Container>
    );
}
