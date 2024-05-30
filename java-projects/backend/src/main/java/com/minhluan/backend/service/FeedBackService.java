package com.minhluan.backend.service;

import com.minhluan.backend.entity.FeedBack;
import java.util.List;

public interface FeedBackService {
    public FeedBack createFeedback(FeedBack Feedback);
    public FeedBack getFeedbackById(Long FeedbackId);
    public List<FeedBack> getAllFeedbacks();
    public FeedBack updateFeedback(FeedBack Feedback);
    public FeedBack deleteFeedback(Long FeedbackId);
}
