import styled from '@emotion/styled';
import Footer from '../components/common/Footer';

const Styled = {
    PartnersWrapper: styled.div`
        background-image: url('/assets/images/partners/partnerspage_background.png');
        background-size: cover;
        background-position: 1 50%;
        background-repeat: no-repeat;
    `,
    ContentWrapper: styled.div`
        padding: 240px 0 140px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
    `,
    ProjectArea: styled.section`
        display: flex;
        width: 100%;
        padding-left: 240px;
        margin-bottom: 340px;
        h2 {
            font-size: 52px;
            font-weight: 700;
        }
        h3 {
            font-size: 52px;
            font-weight: 600;
        }
        p {
            font-size: 20px;
            font-weight: 300;
            line-height: 1.4;
            margin: 16px 0;
        }
        section {
            flex: 1;
            margin-left: 120px;
            overflow-x: auto;
            display: flex;
            margin-right: 16px;
        }
        article {
            margin: 0 8px;
            img {
                width: 461px;
                height: 428px;
            }
            .card-title {
                font-size: 28px;
                font-weight: 600;
                margin: 37px 0;
            }
            .card-desc {
                font-size: 28px;
                font-weight: 400;
            }
        }
    `,
    Title: styled.h2`
        font-size: 60px;
        font-weight: 700;
        margin-bottom: 31px;
        color: white;
    `,
    Desc: styled.p`
        font-size: 20px;
        font-weight: 300;
        text-align: center;
    `,
    PartnersArea: styled.section`
        margin: 136px;
        padding: 0 240px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 164px;
        width: 100%;
        article {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .image-wrapper {
            width: 288px;
            height: 126px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .desc {
            font-size: 17px;
            font-weight: 400;
            text-align: center;
        }
    `,
};

const partners = () => {
    return (
        <Styled.PartnersWrapper>
            <Styled.ContentWrapper>
                <Styled.ProjectArea>
                    <div>
                        <h2>Projects</h2>
                        <h3>with SOPT</h3>
                        <p>
                            다양한 기업 및 단체에서
                            <br />
                            SOPT와 협력 프로젝트를
                            <br />
                            진행했습니다.
                        </p>
                    </div>
                    <section>
                        <article>
                            <img src='/assets/images/partners/remotework.png' />
                            <div className='card-title'>
                                SOPT x SEESO <br /> 리모트워크 특별 세미나
                            </div>
                            <div className='card-desc'>협력 프로젝트</div>
                        </article>
                        <article>
                            <img src='/assets/images/partners/dna.png' />
                            <div className='card-title'>
                                SOPT x KB금융 <br /> DNA 1,2,3
                            </div>
                            <div className='card-desc'>협력 프로젝트</div>
                        </article>
                        <article>
                            <img src='/assets/images/partners/yonsei.png' />
                            <div className='card-title'>
                                연세대 창업지원단 <br /> 지원 외부 동아리
                            </div>
                            <div className='card-desc'>선정</div>
                        </article>
                    </section>
                </Styled.ProjectArea>
                <Styled.Title>Partners</Styled.Title>
                <Styled.Desc>다양한 기업 및 단체에서 SOPT를 위해 후원하고 계십니다.</Styled.Desc>
                <Styled.PartnersArea>
                    <article>
                        <div className='image-wrapper'>
                            <img src='/assets/images/partners/kb.png' />
                        </div>
                        <div className='desc'>KB 금융지주</div>
                    </article>
                    <article>
                        <div className='image-wrapper'>
                            <img src='/assets/images/partners/naverd2.png' />
                        </div>
                        <div className='desc'>Naver D2</div>
                    </article>
                    <article>
                        <div className='image-wrapper'>
                            <img src='/assets/images/partners/dcamp.png' />
                        </div>
                        <div className='desc'>D.CAMP</div>
                    </article>
                    <article>
                        <div className='image-wrapper'>
                            <img src='/assets/images/partners/yonseiuniv.png' />
                        </div>
                        <div className='desc'>연세대학교 창업지원단</div>
                    </article>
                    <article>
                        <div className='image-wrapper'>
                            <img src='/assets/images/partners/orangefarm.png' />
                        </div>
                        <div className='desc'>스마일게이트 오렌지팜</div>
                    </article>
                    <article>
                        <div className='image-wrapper'>
                            <img src='/assets/images/partners/instituteofstartup.png' />
                        </div>
                        <div className='desc'>창업진흥원</div>
                    </article>
                    <article>
                        <div className='image-wrapper'>
                            <img src='/assets/images/partners/asan.png' />
                        </div>
                        <div className='desc'>아산나눔재단</div>
                    </article>
                    <article>
                        <div className='image-wrapper'>
                            <img src='/assets/images/partners/maru180.png' />
                        </div>
                        <div className='desc'>Maru180</div>
                    </article>
                    <article>
                        <div className='image-wrapper'>
                            <img src='/assets/images/partners/baemin.png' />
                        </div>
                        <div className='desc'>배달의민족</div>
                    </article>
                    <article>
                        <div className='image-wrapper'>
                            <img src='/assets/images/partners/tomtoc.png' />
                        </div>
                        <div className='desc'>Tomtoc</div>
                    </article>
                    <article>
                        <div className='image-wrapper'>
                            <img src='/assets/images/partners/awseducate.png' />
                        </div>
                        <div className='desc'>AWS Educate</div>
                    </article>
                    <article>
                        <div className='image-wrapper'>
                            <img src='/assets/images/partners/dreamplus.png' />
                        </div>
                        <div className='desc'>드림플러스</div>
                    </article>
                    <article>
                        <div className='image-wrapper'>
                            <img src='/assets/images/partners/vingle.png' />
                        </div>
                        <div className='desc'>Vingle</div>
                    </article>
                    <article>
                        <div className='image-wrapper'>
                            <img src='/assets/images/partners/wemap.png' />
                        </div>
                        <div className='desc'>위메프</div>
                    </article>
                    <article>
                        <div className='image-wrapper'>
                            <img src='/assets/images/partners/myrealtrip.png' />
                        </div>
                        <div className='desc'>마이리얼트립</div>
                    </article>
                </Styled.PartnersArea>
            </Styled.ContentWrapper>
            <div style={{ padding: '0 240px 100px 240px' }}>
                <Footer />
            </div>
        </Styled.PartnersWrapper>
    );
};

export default partners;
