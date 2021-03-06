import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

const Styled = {
    HeaderWrapper: styled.div`
        position: absolute;
        width: 100vw;
        display: flex;
        align-items: center;
        padding: 52px 200px;
        z-index: 10;
    `,
    HeaderImage: styled.img`
        width: 126px;
        height: 41px;
        &:hover {
            cursor: pointer;
        }
    `,
    Empty: styled.div`
        flex: 1;
    `,
    HeaderNav: styled.nav``,
    HeaderNavBtn: styled.button`
        border: none;
        outline: none;
        margin: 0 8px;
        font-size: 15px;
        height: 32px;
        padding: 0 16px;
        background: none;
        color: white;
        font-weight: 800;
        border: solid 1px;
        border-color: ${(props: { match?: boolean }) => (props.match ? 'white' : 'rgba(0, 0, 0, 0)')};
        border-radius: 8px;
        :hover {
            cursor: pointer;
            border-color: white;
        }
    `,
    HeaderLinkWrapper: styled.div`
        display: flex;
    `,
    HeaderLink: styled.img`
        margin-left: 4px;
        :hover {
            cursor: pointer;
        }
    `,
};

const Header = () => {
    const router = useRouter();
    return (
        <>
            <Styled.HeaderWrapper>
                <Styled.HeaderImage
                    src='/assets/images/logo.svg'
                    alt='headerImage'
                    onClick={() => router.push('/')}></Styled.HeaderImage>
                <Styled.Empty />
                <Styled.HeaderNav>
                    <Link href='/'>
                        <Styled.HeaderNavBtn match={router.pathname === '/'}>HOME</Styled.HeaderNavBtn>
                    </Link>
                    <Link href='/about'>
                        <Styled.HeaderNavBtn match={router.pathname.includes('about')}>ABOUT</Styled.HeaderNavBtn>
                    </Link>
                    <Link href='/archive'>
                        <Styled.HeaderNavBtn match={router.pathname.includes('archive')}>ARCHIVING</Styled.HeaderNavBtn>
                    </Link>
                    <Link href='/history'>
                        <Styled.HeaderNavBtn match={router.pathname.includes('history')}>HISTORY</Styled.HeaderNavBtn>
                    </Link>
                    <Link href='/partners'>
                        <Styled.HeaderNavBtn match={router.pathname.includes('partners')}>PARTNERS</Styled.HeaderNavBtn>
                    </Link>
                    <Link href='/recruit'>
                        <Styled.HeaderNavBtn match={router.pathname.includes('recurit')}>RECRUIT</Styled.HeaderNavBtn>
                    </Link>
                </Styled.HeaderNav>
                <Styled.HeaderLinkWrapper>
                    <Link href='https://www.facebook.com/clubsopt'>
                        <a target='_blank' title='페이스북 바로가기'>
                            <Styled.HeaderLink src='/assets/icons/facebook_link.svg' alt='facebook-link' />
                        </a>
                    </Link>
                    <Link href='https://www.instagram.com/sopt_official/'>
                        <a target='_blank' title='인스타그램 바로가기'>
                            <Styled.HeaderLink src='/assets/icons/instagram_link.svg' alt='instagram-link' />
                        </a>
                    </Link>
                    <Link href='https://www.youtube.com/channel/UCui_xDNrVlxAuGJUV8zmN6A'>
                        <a target='_blank' title='페이스북 바로가기'>
                            <Styled.HeaderLink src='/assets/icons/youtube_link.svg' alt='youtube-link' />
                        </a>
                    </Link>
                </Styled.HeaderLinkWrapper>
            </Styled.HeaderWrapper>
        </>
    );
};

export default Header;
