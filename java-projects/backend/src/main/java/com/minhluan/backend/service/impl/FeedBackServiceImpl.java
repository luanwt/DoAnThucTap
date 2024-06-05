package com.minhluan.backend.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.minhluan.backend.entity.FeedBack;
import com.minhluan.backend.repository.FeedbackRepository;
import com.minhluan.backend.service.FeedBackService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class FeedBackServiceImpl implements FeedBackService {
    private FeedbackRepository feedbackRepository;

    @Override
    public FeedBack createFeedback(FeedBack feedback) {
        return feedbackRepository.save(feedback);
    }

    @Override
    public FeedBack getFeedbackById(Long feedbackId){
        Optional<FeedBack> optionalFeedback = feedbackRepository.findById(feedbackId);
        return optionalFeedback.get();
    }

     @Override
    public List<FeedBack> getAllFeedbacks() {
        return feedbackRepository.findAll();
    }
@Override
      public FeedBack updateFeedback(FeedBack Feedback){
        FeedBack existingFeedback = feedbackRepository.findById(Feedback.getId()).get();
        existingFeedback.setFullname(Feedback.getFullname());

        existingFeedback.setEmail(Feedback.getEmail());
        existingFeedback.setPhone_number(Feedback.getPhone_number());
        existingFeedback.setContent(Feedback.getContent());
        existingFeedback.setNote(Feedback.getNote());
        existingFeedback.setStatus(Feedback.getStatus());
        existingFeedback.setCreated_at(Feedback.getCreated_at());
        existingFeedback.setUpdate_at(Feedback.getUpdate_at());
        FeedBack updateFeedback = feedbackRepository.save(existingFeedback);
        return updateFeedback;
    }

    @Override
    public FeedBack deleteFeedback(Long feedbackId) {
        feedbackRepository.deleteById(feedbackId);
        return null;
    }

}
