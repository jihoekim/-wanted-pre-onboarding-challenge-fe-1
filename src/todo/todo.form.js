// @ts-check
/// <reference path="../typedefs.js" />

import React, { useState } from "react";
import {
    Button,
    CssBaseline,
    Box,
    Container,
    createTheme,
    ThemeProvider,
    TextField
} from '@mui/material';

const theme = createTheme();

/** 
 * TODO를 작성/수정하기 위한 입력 컴포넌트
 * 
 * @typedef {object} Props
 * @prop {(todo:Todo|null)=>any} onComplete
 * @prop {Todo=} todo
 * 
 * @param {Props} props
 */
export default function TodoForm(props) {

    const initail_todo = props.todo||
    {
        title:'',
        content:'',
        id:undefined
    };

    const [todo, setTodo] = useState(initail_todo);

    /**
     *  @typedef {object} Event
     */

    /**
     * handle todo title change
     * 
     * @param {Event} e 
     */
    function handleTitleChange(e) {
        let t_todo = {
            title: e.target.value,
            content: todo?.content,
            id:todo?.id
        }
        setTodo(t_todo);
    }
    /**
     * handle todo content change
     * 
     * @param {Event} e 
     */
    function handleContentChange(e) {
        let t_todo = {
            title: todo?.title,
            content: e.target.value,
            id:todo?.id
        }
        setTodo(t_todo);
    }

    function handleCancel() {
        setTodo(initail_todo);
    }

    function handleSave(todo) {
        props.onComplete(todo);
    }

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                <Box sx={{ mt: 1 }}>
                    <TextField
                        required
                        fullWidth
                        label="제목"
                        margin="normal"
                        autoFocus
                        onChange={handleTitleChange} 
                        value={todo.title}
                        />
                    <TextField
                        required
                        fullWidth
                        margin="normal"
                        multiline
                        rows={10}
                        label="내용"
                        onChange={handleContentChange} 
                        value={todo.content}
                        />
                    <Button
                        variant="contained"
                        onClick={()=>handleSave(todo)}
                        sx={{ mt: 3, mb: 2 , mr:1}}
                    >
                        저장
                    </Button>
                    <Button
                        variant="contained"
                        onClick={()=>handleCancel()}
                        sx={{ mt: 3, mb: 2 }}
                    >
                        취소
                    </Button>
                </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};