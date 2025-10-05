package com.example.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import jakarta.servlet.http.HttpServletRequest;

import java.time.Instant;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(Emailnotfound.class)
    public ResponseEntity<Response> handleEmailNotFound(Emailnotfound e, HttpServletRequest request) {
        Response body = new Response();
        body.setStatus(HttpStatus.NOT_FOUND.value());
        body.setError(HttpStatus.NOT_FOUND.getReasonPhrase());
        body.setMessage(e.getMessage());
        body.setTimestamp(Instant.now().toString());
        body.setPath(request.getRequestURI());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(body);
    }

    @ExceptionHandler(Execptionerror.class)
    public ResponseEntity<Response> handleExecptionError(Execptionerror e, HttpServletRequest request) {
        Response body = new Response();
        body.setStatus(HttpStatus.CONFLICT.value());
        body.setError(HttpStatus.CONFLICT.getReasonPhrase());
        body.setMessage(e.getMessage());
        body.setTimestamp(Instant.now().toString());
        body.setPath(request.getRequestURI());
        return ResponseEntity.status(HttpStatus.CONFLICT).body(body);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Response> handleException(Exception e, HttpServletRequest request) {
        Response body = new Response();
        body.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());
        body.setError(HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase());
        body.setMessage(e.getMessage());
        body.setTimestamp(Instant.now().toString());
        body.setPath(request.getRequestURI());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(body);
    }
    @ExceptionHandler(Validerror.class)
    public ResponseEntity<Response> handleValidError(Validerror e, HttpServletRequest request) {
        Response body = new Response();
        body.setStatus(HttpStatus.BAD_REQUEST.value());
        body.setError(HttpStatus.BAD_REQUEST.getReasonPhrase());
        body.setMessage(e.getMessage());
        body.setTimestamp(Instant.now().toString());
        body.setPath(request.getRequestURI());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(body);
    }
}
