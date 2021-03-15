import styled from '@emotion/styled';

const Styled = {
    ModalWrapper: styled.div`
        position: fixed;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    Modal: styled.div`
        background: #eee;
        padding: 60px;
    `,
};

type Props = {
    imgUrl: string;
};
const TeamModal = function ({ imgUrl }: Props) {
    return (
        <Styled.ModalWrapper>
            <Styled.Modal>
                <div>X</div>
                <div>
                    <img src={imgUrl} width='186px' height='186px'></img>
                    <div></div>
                </div>
            </Styled.Modal>
        </Styled.ModalWrapper>
    );
};

export default TeamModal;
