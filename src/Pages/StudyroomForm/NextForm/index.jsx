/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import React, { useEffect, useState, useCallback } from 'react';
import { NextDark, PreviewLectureList } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import useSWR from 'swr';
import { fetcher } from '../../../lib/api/fetcher';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { AccordionStyle } from '../../../components/Collapse/styles';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const NextForm = ({ setPage, page }) => {
  const { classroomId } = useParams();
  const { data: sectionData } = useSWR(`/api/sections/${classroomId}`, fetcher);
  const studyroomFormPagePrev = useSelector(
    (state) => state.studyrooms.studyroomFormPagePrev,
  );
  const dispatch = useDispatch();
  const [selectVideo, setSelectVideo] = useState(null);
  const [studyroom, setStudyroom] = useState(null);
  const theme = useTheme();
  const onPushPrev = () => {
    setPage(page - 1);
  };

  const onSelectVideo = useCallback(
    (video) => {
      setSelectVideo(video);
    },
    [setSelectVideo],
  );

  const onSubmit = useCallback(async () => {
    if (studyroomFormPagePrev && selectVideo) {
      const data = {
        studyroom: studyroomFormPagePrev,
        video: selectVideo,
      };
      console.log(data);
      // await axios.post('', data, {withCredentials: true}).then((res) => setStudyroom(res.data)).catch((e) => console.error(e));
    }
  }, [setStudyroom, studyroomFormPagePrev, selectVideo]);

  useEffect(() => {
    if (selectVideo) {
      toast(`🎉 ${selectVideo.title}가 선택되었습니다`, {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        type: 'default',
      });
    }
  }, [selectVideo]);

  if (sectionData) {
    console.log(sectionData);
  }
  return (
    <>
      <PreviewLectureList css={NextDark(theme)}>
        <div className="form-layout">
          <div className="create-title">
            스터디룸 <span>개설</span>하기
          </div>
          <div className="preview-box">
            <div className="preview-box-padding">
              <div className="preview-box-title">강의 선택</div>
              <hr />
              <div className="preview-box-section">
                {sectionData?.data && (
                  <AccordionStyle>
                    <div className="accordion">
                      <Accordion className="accordion-border" allowZeroExpanded>
                        {sectionData.data.length > 0 ? (
                          sectionData.data.map((section, idx) => (
                            <AccordionItem key={section.id}>
                              <AccordionItemHeading>
                                <AccordionItemButton className="button">
                                  섹션 {idx + 1}. {section.title}
                                </AccordionItemButton>
                              </AccordionItemHeading>
                              {section.Videos?.map((video) => (
                                <AccordionItemPanel
                                  style={{ cursor: 'pointer' }}
                                  key={video.id}
                                  className="video"
                                  onClick={() => onSelectVideo(video)}
                                >
                                  <div>{video.title}</div>
                                </AccordionItemPanel>
                              ))}
                            </AccordionItem>
                          ))
                        ) : (
                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton
                                style={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                }}
                                className="button"
                              >
                                강의를 준비중입니다 ㅜ_ㅜ
                              </AccordionItemButton>
                            </AccordionItemHeading>
                          </AccordionItem>
                        )}
                      </Accordion>
                    </div>
                  </AccordionStyle>
                )}
              </div>
            </div>
            <div className="preview-box-button">
              <div className="prev" onClick={onPushPrev}>
                이전
              </div>
              <div onClick={onSubmit} className="create">
                개설하기
              </div>
            </div>
          </div>
        </div>
      </PreviewLectureList>
      <ToastContainer />
    </>
  );
};

export default React.memo(NextForm);
