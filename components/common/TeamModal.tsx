import styled from '@emotion/styled';
import { on } from 'process';
import { useEffect, useState } from 'react';

const Styled = {
    ModalWrapper: styled.div<{ visible: boolean }>`
        display: ${(props) => (props.visible ? 'flex' : 'none')};
        align-items: center;
        justify-content: center;
        position: fixed;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        z-index: 100;
    `,
    Modal: styled.div`
        background: #eee;
        padding: 60px;
        width: 36%;
        border-radius: 24px;
        position: relative;
    `,
    Close: styled.img`
        position: absolute;
        top: 12px;
        right: 12px;
        :hover {
            cursor: pointer;
        }
    `,
    Title: styled.h1`
        font-size: 30px;
        margin: 52px 0 12px 0;
        font-weight: 500;
    `,
    Desc: styled.p`
        font-size: 20px;
    `,
    SubTitle: styled.div`
        font-size: 20px;
        font-weight: 500;
        margin: 12px 0;
    `,
    SubDesc: styled.p`
        font-size: 16px;
    `,
    Content: styled.div`
        margin: 52px 0;
    `,
};

type Team_T = {
    name: string;
    desc: string;
    imageURL: string;
    serviceDesc: string;
    subData: Array<{ name: string; link: string }>;
};

type Props_T = {
    imgUrl: string;
    teamData: Team_T;
    visible: boolean;
    on: Function;
    off: Function;
};
const TeamModal = function ({ imgUrl, teamData, visible, on, off }: Props_T) {
    useEffect(() => {
        if (visible) on();
        else off();
    }, [visible]);
    return (
        <Styled.ModalWrapper visible={visible}>
            <Styled.Modal>
                <Styled.Close onClick={() => off()} src='/assets/icons/close.svg' />
                <div style={{ display: 'flex' }}>
                    <img src={imgUrl} width='160px' height='160px'></img>
                    <div style={{ marginLeft: '36px' }}>
                        <Styled.Title>{teamData.name}</Styled.Title>
                        <Styled.Desc>{teamData.desc}</Styled.Desc>
                    </div>
                </div>
                <Styled.Content>
                    <Styled.SubTitle>서비스 설명</Styled.SubTitle>
                    <Styled.SubDesc style={{ lineHeight: '1.6' }}>{teamData.serviceDesc}</Styled.SubDesc>
                </Styled.Content>
                {teamData.subData.length > 0 ? (
                    <div>
                        <Styled.SubTitle>추가 자료</Styled.SubTitle>
                        {teamData.subData.map((data, i) => (
                            <div key={'additional-' + i} style={{ display: 'flex', margin: '10px 0' }}>
                                <Styled.SubDesc style={{ flex: 1, minWidth: '128px' }}>{data.name}</Styled.SubDesc>
                                <a href={data.link} style={{ flex: 3, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    {data.link}
                                </a>
                            </div>
                        ))}
                    </div>
                ) : (
                    ''
                )}
            </Styled.Modal>
        </Styled.ModalWrapper>
    );
};

export default TeamModal;
