package com.minhluan.backend.service;

import com.minhluan.backend.entity.Token;
import java.util.List;

public interface TokenService {
    public Token createToken(Token Token);
    public Token getTokenById(Long TokenId);
    public List<Token> getAllTokens();
    public Token updateToken(Token Token);
    public Token deleteToken(Long TokenId);
}
