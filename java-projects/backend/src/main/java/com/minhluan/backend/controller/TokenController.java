package com.minhluan.backend.controller;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import com.minhluan.backend.entity.Token;

import com.minhluan.backend.service.TokenService;
import java.util.List;
import org.springframework.http.HttpHeaders;
@RestController
@AllArgsConstructor
@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" }, exposedHeaders = "Content-Range")
@RequestMapping("api/token")
public class TokenController{
    private TokenService TokenService;
    // Create Token REST API

@PostMapping

public ResponseEntity<Token> createToken(@RequestBody Token Token) {
Token savedToken = TokenService.createToken(Token);
return new ResponseEntity<>(savedToken, HttpStatus.CREATED);


}
// Get Token by id REST API

// http://1ocalhost:8080/api/Tokens/1

@GetMapping("{id}")

public ResponseEntity<Token> getTokenById(@PathVariable("id") Long TokenId) {
Token Token = TokenService.getTokenById(TokenId);
return new ResponseEntity<>(Token, HttpStatus.OK);
}
// Get All Tokens REST API

// http://1ocalhost:8080/api/Tokens

@GetMapping

public ResponseEntity<List<Token>> getAllTokens() {
List<Token> Tokens = TokenService.getAllTokens();
HttpHeaders headers= new HttpHeaders();
headers.add("Content-Range","items 0-"+Tokens.size()+"/" +Tokens.size());
return ResponseEntity.ok().headers(headers).body(Tokens);


}
// Update Token REST API
@PutMapping("{id}")
// http://localhost:8080/api/Tokens/1
public ResponseEntity<Token> updateToken(@PathVariable("id") Long TokenId,
@RequestBody Token Token) {
Token.setId(TokenId);
Token updatedToken = TokenService.updateToken(Token);
return new ResponseEntity<>(updatedToken, HttpStatus.OK);
}
// Delete Token REST API

@DeleteMapping("{id}")

public ResponseEntity<String> deleteToken(@PathVariable("id") Long TokenId) {
TokenService.deleteToken(TokenId);
return new ResponseEntity<>("Token successfully deleted!", HttpStatus.OK);
}
}