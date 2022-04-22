import Link from "next/link";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";

import { Logo, Tooltip } from "~/ui";

import * as S from "./Footer.styled";

export function Footer() {
  return (
    <S.Container>
      <S.Box>
        <Logo />
        <S.Copyright>© 2022 All rights reserved</S.Copyright>
      </S.Box>
      <S.SocialBox>
        <Tooltip size="small" as="li" message="Github">
          <Link href="https://github.com/oigabrielteodoro" passHref>
            <a aria-label="github" target="_blank">
              <S.Social>
                <FiGithub size={20} />
              </S.Social>
            </a>
          </Link>
        </Tooltip>
        <Tooltip size="small" as="li" message="LinkedIn">
          <Link href="https://linkedin.com/in/oigabrielteodoro" passHref>
            <a aria-label="linkedin" target="_blank">
              <S.Social>
                <FiLinkedin size={20} />
              </S.Social>
            </a>
          </Link>
        </Tooltip>
        <Tooltip size="small" as="li" message="Twitter">
          <Link href="https://twitter.com/ogabrielteodoro" passHref>
            <a aria-label="twitter" target="_blank">
              <S.Social>
                <FiTwitter size={20} />
              </S.Social>
            </a>
          </Link>
        </Tooltip>
        <Tooltip size="small" as="li" message="Instagram">
          <Link href="https://instagram.com/oigabrielteodoro" passHref>
            <a aria-label="instagram" target="_blank">
              <S.Social>
                <FiInstagram size={20} />
              </S.Social>
            </a>
          </Link>
        </Tooltip>
        <Tooltip size="small" as="li" message="Discord">
          <Link href="https://discord.com/users/859838026326868049" passHref>
            <a aria-label="discord" target="_blank">
              <S.Social>
                <FaDiscord size={20} />
              </S.Social>
            </a>
          </Link>
        </Tooltip>
        <Tooltip size="small" as="li" message="Email">
          <Link href="mailto:oi@gabrielteodoro.com" passHref>
            <a aria-label="send email">
              <S.Social>
                <FiMail size={20} />
              </S.Social>
            </a>
          </Link>
        </Tooltip>
      </S.SocialBox>
    </S.Container>
  );
}
