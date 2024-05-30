
package com.minhluan.backend.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.minhluan.backend.entity.Token;
import com.minhluan.backend.repository.TokenReponsitory;
import com.minhluan.backend.service.TokenService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class TokenServiceimpl implements TokenService {
    private TokenReponsitory TokenRepository;

    @Override
    public Token createToken(Token Token) {
        return TokenRepository.save(Token);
    }

    @Override
    public Token getTokenById(Long TokenId){
        Optional<Token> optionalToken = TokenRepository.findById(TokenId);
        return optionalToken.get();
    }

     @Override
    public List<Token> getAllTokens() {
        return TokenRepository.findAll();
    }

    @Override
    public Token updateToken(Token Token){
        Token existingToken = TokenRepository.findById(Token.getId()).get();
        existingToken.setCreated_at(Token.getCreated_at());
        existingToken.setToken(Token.getToken());
        existingToken.setUser(Token.getUser());
        Token updateToken = TokenRepository.save(existingToken);
        return updateToken;
    }

    @Override
    public Token deleteToken(Long TokenId) {
        TokenRepository.deleteById(TokenId);
        return null;
    }
}
