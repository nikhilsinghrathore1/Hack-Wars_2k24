# import cv2
# import mediapipe
# import pyautogui
import autopy
# a = 0
# capture_hands = mediapipe.solutions.hands.Hands(False , 1 )
# face_mesh = mediapipe.solutions.face_mesh.FaceMesh(refine_landmarks = True)
# drawing_option = mediapipe.solutions.drawing_utils 
# screen_width , screen_height = pyautogui.size()
# camera = cv2.VideoCapture(0)
# x1 = y1 = x2 = y2 = x3 = y3 = x4 = y4 = 0 
# while True:
               
#                _,image = camera.read()
#                image_height , image_width ,_ = image.shape
#                image = cv2.flip(image,1)
#                rgb_image = cv2.cvtColor(image,cv2.COLOR_BGR2RGB)
#                output_hands = capture_hands.process(rgb_image)
#                output_face = face_mesh.process(rgb_image)
#                landmark_points = output_face.multi_face_landmarks
#                frame_h, frame_w, _ = image.shape
#                if landmark_points:
#                        landmarks = landmark_points[0].landmark
#                        for id, landmark in enumerate(landmarks[474:478]):
#                               x = int(landmark.x * frame_w)
#                               y = int(landmark.y * frame_h)
#                               cv2.circle(image, (x, y), 3, (0, 255, 0))
#                               if id == 1:
#                                              screen_x = screen_width * landmark.x
#                                              screen_y = screen_height * landmark.y 
#                                              pyautogui.moveTo(screen_x, screen_y)
#                               left = [landmarks[145], landmarks[159]]
#                               for landmark in left:
#                                              x = int(landmark.x * frame_w)
#                                              y = int(landmark.y * frame_h)
#                                              cv2.circle(image, (x, y), 3, (0, 255, 255))
                                             
#                                         #      print(left[0].y - left[1].y)
#                         #       if (left[0].y - left[1].y)<0.01:
#                               if (left[0].y - left[1].y)<0.01:
                                                
#                                         #      pyautogui.sleep(1)
                                        
#                                              a = a+1
#                                              if(a>4):
#                                                             #     pyautogui.click()
#                                                                 # print(a)
#                                                                 a= 0      

#                                         #      print("click")
#                # frame_h, frame_w, _ = image.shape
#                all_hands = output_hands.multi_hand_landmarks
#                # all_hands = output_hands.single_hand_landmarks
#                if all_hands:
#                               for hand in all_hands:
#                                              drawing_option.draw_landmarks(image,hand)
#                                              one_hand_landmarks = hand.landmark
#                                              for id, lm in enumerate(one_hand_landmarks):
#                                                             x = int (lm.x*image_width)
#                                                             y = int (lm.y*image_height)
#                                                             # print(x,y)
#                                                             if id == 8:
                                                                 
#                                                                            mouse_x = int (screen_width/image_width *(x) )
#                                                                            mouse_y = int (screen_height/image_height * (y))
#                                                                            cv2.circle(image,(x,y),10,(0,255,255))
#                                                                            # pyautogui.moveTo(mouse_x,mouse_y)
                                                                           # autopy.mouse.smooth_move( mouse_x, mouse_y)
#                                                                            # autopy.mouse.move(mouse_x,mouse_y)
#                                                                            x1 = x 
#                                                                            y1 = y 
#                                                                            # print(x1,y1)
#                                                             if id == 4:
#                                                                            x2 = x 
#                                                                            y2 = y
                                                                           
#                                                                            # print(x2,y2)
                                                                           
#                                                                            cv2.circle(image,(x,y),10,(0,255,255))
#                                                             if id == 12:
#                                                                            x3 = x 
#                                                                            y3 = y
#                                                                            # print(x2,y2)
                                                                           
#                                                                            cv2.circle(image,(x,y),10,(0,255,255))
#                                                             if id == 16:
#                                                                            x4 = x 
#                                                                            y4 = y
#                                                                            # print(x2,y2)
                                                                           
#                                                                            cv2.circle(image,(x,y),10,(0,255,255))
                                                                           
#                                              dist = y2 - y1
#                                              scrolling = x3-x1
#                                              upscroll = x4-x2
#                                              # print(dist)
#                                              if(dist<30):
#                                                             pyautogui.click()
# #                                                             autopy.mouse.click(autopy.mouse.Button.RIGHT)
#                                              elif(scrolling<10):
#                                                             pyautogui.scroll(-200)
#                                              elif(upscroll<10):
#                                                             pyautogui.scroll(200)
#                cv2.imshow("gestures",image)
#                key = cv2.waitKey(50)
#                if key == 27:
#                               break
# camera.release()
# cv2.destroyAllWindows()               
# # one dimensional random variable and their probability mass func and probability func and distribution func there may also be situation where we have to study two dimensional random variables in connection with a random variable we maybe insterested in reporting the number of boys and girls in a born in a hospital on a particular day let 'X' and 'Y' be defined on a sample space as of a random experiment then the func (x,y) defined on the same sample space is called two dimensional random variable 






import cv2
import mediapipe
import pyautogui
capture_hands = mediapipe.solutions.hands.Hands()
drawing_option = mediapipe.solutions.drawing_utils 
screen_width , screen_height = pyautogui.size()
camera = cv2.VideoCapture(0)
x1 = y1 = x2 = y2 = x3 = y3 = x4 = y4 = 0 
while True:
               
               _,image = camera.read()
               image_height , image_width ,_ = image.shape
               image = cv2.flip(image,1)
               rgb_image = cv2.cvtColor(image,cv2.COLOR_BGR2RGB)
               output_hands = capture_hands.process(rgb_image)
               all_hands = output_hands.multi_hand_landmarks
               if all_hands:
                              for hand in all_hands:
                                             drawing_option.draw_landmarks(image,hand)
                                             one_hand_landmarks = hand.landmark
                                             for id, lm in enumerate(one_hand_landmarks):
                                                            x = int (lm.x*image_width)
                                                            y = int (lm.y*image_height)
                                                            # print(x,y)
                                                            if id == 8:
                                                                           mouse_x = int (screen_width/image_width *x )
                                                                           mouse_y = int (screen_height/image_height * y)
                                                                           cv2.circle(image,(x,y),10,(0,255,255))
                                                                           pyautogui.moveTo(mouse_x,mouse_y)
                                                                           # autopy.mouse.move(mouse_x,mouse_y)
                                                                           # autopy.mouse.smooth_move( mouse_x, mouse_y)
                                                                           x1 = x 
                                                                           y1 = y 
                                                                           # print(x1,y1)
                                                            if id == 4:
                                                                           x2 = x 
                                                                           y2 = y
                                                                           # print(x2,y2)
                                                                           
                                                                           cv2.circle(image,(x,y),10,(0,255,255))
                                                            if id == 12:
                                                                           x3 = x 
                                                                           y3 = y
                                                                           # print(x2,y2)
                                                                           
                                                                           cv2.circle(image,(x,y),10,(0,255,255))
                                                            if id == 16:
                                                                           x4 = x 
                                                                           y4 = y
                                                                           # print(x2,y2)
                                                                           
                                                                           cv2.circle(image,(x,y),10,(0,255,255))
                                                                           
                                             dist = y2 - y1
                                             scrolling = x3-x1
                                             upscroll = x4-x2
                                             print(upscroll)
                                             if(dist<15):
                                                            pyautogui.click()
                                                            # print("clicked")
                                                            
                                                            
                                             if(scrolling<10):
                                                            pyautogui.scroll(-200)
                                             if(upscroll<10):
                                                            pyautogui.scroll(200)
               cv2.imshow("gestures",image)
               key = cv2.waitKey(100)
               if key == 27:
                              break
camera.release()
cv2.destroyAllWindows()          


# okay so even this part is almost done i just need to controll it then if that is done then i will take a break 
